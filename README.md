# Old PC

This website simulates the appearance of old systems on a CRT monitor. The project uses a custom font that mimics the look of old fonts, and the page blinks like a CRT monitor. There are also various color schemes available, many of which are reminiscent of old systems, such as white on black.

## Table of Contents

- Motivation
- Features
- Usage
- Future Plans

## Motivation

I have always wanted to create a website that simulates the look of old systems on a CRT monitor. In the past, I attempted to build such a website using old JavaScript techniques, but the result was not satisfactory. So, I decided to rebuild the website from scratch using modern techniques. The entire project was completed in under 5 hours.

## Features

This project has the following features:

- Display text within a frame to mimic the appearance of old systems.
- Create custom menus and pages.
- Change the color schemes.
- Options to enable or disable text shadows and page blinking.
- Keyboard shortcuts.
- Navigation of the page using only the keyboard.
- Pages stored in a separate file with easy editing and updating.

## Usage

There are 3 shortcuts currently on the page:

- Q - Turn off the page blinking and text shadows
- W - Scroll up
- S - Scroll down

If you would like to customize the project, there are several files that you can modify:

- `pages.js` - This file contains all the pages and menus within the project.
- `Screen.js` - This file contains the Screen class, where you can edit shortcuts and change the logic.
- `script.js` - This file adds the pages to the Screen class.

To create your own pages and menus, you only need to edit the `pages.js` file. Inside this file, there is an array called `pages` that contains all the page objects.

A page object should have the following properties:

- `name` - A unique name for the page.
- `keepSpaces` (optional) - If set to true, leading spaces in strings will be preserved. By default, leading spaces are removed.
- `content` - The content for the page, saved as an array. Each string represents one line.
  - `""` - Generates an empty line.
  - `"-=-"` - Generates a horizontal line.
- `menu` - An array of objects containing data about each menu item.
  - `page` - A link to the unique name of the page.
  - `text` - The text displayed on the page.
  - `func` (optional) - A function that will be executed before changing the page.

Here is an example of a simple page object with menu:

```js
{
    name: "main",
    content: [
        "Welcome to the website! This page is designed to simulate the nostalgic experience of using old CRT monitors and PCs.",
        "",
        "Please select an option from the menu below:",
    ],
    menu: [
        {
            page: "colors",
            text: "Color schemes",
        },
        {
            page: "blink",
            text: "Page blinking",
        },
        {
            page: "project-creation",
            text: "Project creation",
        },
        {
            page: "project-use",
            text: "Using the project",
        },
    ],
},
```

Here is an example of a simple page object that changes the color of the page using custom functions:

```js
{
    name: "colors",
    content: [
        "This website supports multiple color schemes. You can choose from the options below, and the colors will change instantly upon selection.",
        "",
        "Please select the color scheme you prefer:",
    ],
    menu: [
        {
            page: "color-confirm",
            text: "White on black",
            func: function () {
                document.documentElement.style.setProperty("--color-bg", "#111");
                document.documentElement.style.setProperty("--color-txt", "#bbb");
            },
        },
        {
            page: "color-confirm",
            text: "Green on black",
            func: function () {
                document.documentElement.style.setProperty("--color-bg", "#111");
                document.documentElement.style.setProperty("--color-txt", "#0c0");
            },
        },
        {
            page: "main",
            text: "Return",
        },
    ],
},
```

## Future Plans

This project is still in development and has some room for improvement. Some of the future plans are:

- Mobile-friendly version of the page.
