class Screen {
    constructor() {
        this.lineSize = 64;
        this.currentPage = "main";
        this.pages = [];
        this.activeMenu = 0;
        document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => this.keyboardHandler(event));
    }

    addPage(name, content, menu, keepSpaces = false) {
        if (name == "undefined") {
            throw new Error("page name is undefined");
        }
        if (content == "undefined") {
            throw new Error("page content is undefined");
        }

        this.pages[name] = {
            content,
            menu,
        };

        if (keepSpaces === true) {
            this.pages[name].keepSpaces = true;
        }
    }

    writeTop() {
        let line = "╔";

        for (let i = 0; i < this.lineSize; i++) {
            line += "═";
        }

        line += "╗";
        document.getElementById("content").insertAdjacentHTML("beforeend", `<p>${line}</p>`);
    }

    writeBottom() {
        let line = "╚";

        for (let i = 0; i < this.lineSize; i++) {
            line += "═";
        }

        line += "╝";
        document.getElementById("content").insertAdjacentHTML("beforeend", `<p>${line}</p>`);
    }

    writeLine(text, lineId) {
        let maxLineSize = lineId ? this.lineSize - 3 : this.lineSize - 2;
        if (text.length <= maxLineSize) {
            let num = maxLineSize - text.length;
            let line = (lineId ? `║ <span id="${lineId}-blink" class="blinking-space">█</span>` : "║ ") + text;

            for (let i = 0; i < num; i++) {
                line += " ";
            }
            line += " ║";
            document.getElementById("content").insertAdjacentHTML("beforeend", `<p ${lineId ? `id="${lineId}"` : ""}>${line}</p>`);
        } else {
            throw new Error("text is too long for a line");
        }
    }

    writeText(text, removeSpaces = true) {
        if (text.length <= this.lineSize - 2) {
            if (text === "-=-") {
                this.writeHR();
            } else {
                this.writeLine(text);
            }
        } else {
            let regexp = new RegExp(`.{1,${this.lineSize - 2}}(?=\\s|$)`, "g");
            let lines = text.match(regexp);

            for (let i = 0; i < lines.length; i++) {
                if (removeSpaces) {
                    this.writeLine(lines[i].replace(/^\s/, ""));
                } else {
                    this.writeLine(lines[i]);
                }
            }
        }
    }

    writeHR() {
        let line = "╠";

        for (let i = 0; i < this.lineSize; i++) {
            line += "═";
        }

        line += "╣";
        document.getElementById("content").insertAdjacentHTML("beforeend", `<p>${line}</p>`);
    }

    displayPage() {
        let page = this.pages[this.currentPage];
        this.writeTop();
        for (let i = 0; i < page.content.length; i++) {
            if (page.keepSpaces === true) {
                this.writeText(page.content[i], false);
            } else {
                this.writeText(page.content[i]);
            }
        }
        if (page.menu) {
            this.writeMenu();
        }
        this.writeBottom();
    }

    writeMenu() {
        let page = this.pages[this.currentPage];
        for (let i = 0; i < page.menu.length; i++) {
            this.writeLine(">" + page.menu[i].text, `menu-opt-${i}`);
        }

        document.getElementById(`menu-opt-${this.activeMenu}-blink`).classList.add("blinking");
    }

    keyboardHandler(event) {
        console.log(event.key);
        switch (event.key) {
            case "Enter":
                if (this.pages[this.currentPage].menu[this.activeMenu].func) {
                    this.pages[this.currentPage].menu[this.activeMenu].func();
                }

                if (this.pages[this.currentPage].menu[this.activeMenu].page) {
                    this.changePage(this.pages[this.currentPage].menu[this.activeMenu].page);
                }
                break;

            case "ArrowDown":
                event.preventDefault();
                document.getElementById(`menu-opt-${this.activeMenu}-blink`).classList.remove("blinking");

                this.activeMenu += 1;
                if (this.activeMenu >= this.pages[this.currentPage].menu.length) {
                    this.activeMenu = 0;
                }

                document.getElementById(`menu-opt-${this.activeMenu}-blink`).classList.add("blinking");
                break;

            case "ArrowUp":
                event.preventDefault();
                document.getElementById(`menu-opt-${this.activeMenu}-blink`).classList.remove("blinking");

                this.activeMenu -= 1;
                if (this.activeMenu < 0) {
                    this.activeMenu = this.pages[this.currentPage].menu.length - 1;
                }

                document.getElementById(`menu-opt-${this.activeMenu}-blink`).classList.add("blinking");
                break;

            case "Q":
            case "q":
                document.documentElement.style.setProperty("--shadow-1", "0");
                document.documentElement.style.setProperty("--shadow-2", "0");
                document.documentElement.style.setProperty("--opacity-low", "0.9");
                break;

            case "W":
            case "w":
                console.log("ok");
                scrollBy(0, -32);
                break;

            case "S":
            case "s":
                scrollBy(0, 32);
                break;
        }
    }

    changePage(menu) {
        this.currentPage = menu;
        this.activeMenu = 0;
        document.getElementById("content").innerText = "";
        this.displayPage(this.currentPage);
    }
}

export default Screen;
