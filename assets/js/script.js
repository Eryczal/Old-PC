import Screen from "./Screen.js";
import pages from "./pages.js";

const screen = new Screen();

for (let i = 0; i < pages.length; i++) {
	screen.addPage(pages[i].name, pages[i].content, pages[i].menu, pages[i].keepSpaces);
}

screen.displayPage();
