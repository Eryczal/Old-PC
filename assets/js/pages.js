const pages = [
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
				page: "color-confirm",
				text: "White on blue",
				func: function () {
					document.documentElement.style.setProperty("--color-bg", "#009");
					document.documentElement.style.setProperty("--color-txt", "#bbb");
				},
			},
			{
				page: "color-confirm",
				text: "White on green",
				func: function () {
					document.documentElement.style.setProperty("--color-bg", "#020");
					document.documentElement.style.setProperty("--color-txt", "#aaa");
				},
			},
			{
				page: "main",
				text: "Return",
			},
		],
	},
	{
		name: "blink",
		content: [
			"This website simulates the style of old CRT monitors by constantly blinking.",
			"You can adjust the intensity of the blinking or turn it off entirely.",
			"To enhance the retro feel, the text also features changing shadows.",
			"",
			"Please adjust the page to your liking:",
		],
		menu: [
			{
				page: "blink-confirm",
				text: "Intense blinking",
				func: function () {
					document.documentElement.style.setProperty("--opacity-low", "0.5");
				},
			},
			{
				page: "blink-confirm",
				text: "Moderate blinking",
				func: function () {
					document.documentElement.style.setProperty("--opacity-low", "0.7");
				},
			},
			{
				page: "blink-confirm",
				text: "Mild blinking",
				func: function () {
					document.documentElement.style.setProperty("--opacity-low", "0.8");
				},
			},
			{
				page: "blink-confirm",
				text: "Very low blinking",
				func: function () {
					document.documentElement.style.setProperty("--opacity-low", "0.85");
				},
			},
			{
				page: "blink-confirm",
				text: "No blinking",
				func: function () {
					document.documentElement.style.setProperty("--opacity-low", "0.9");
				},
			},
			{
				page: "shadow-confirm",
				text: "Turn on text shadows",
				func: function () {
					document.documentElement.style.setProperty("--shadow-1", "-1.5px 0 1px var(--color-red), 1.5px 0 1px var(--color-blue)");
					document.documentElement.style.setProperty("--shadow-2", "-2px 0 1px var(--color-red), 2px 0 1px var(--color-blue)");
				},
			},
			{
				page: "shadow-confirm",
				text: "Turn off text shadows",
				func: function () {
					document.documentElement.style.setProperty("--shadow-1", "0");
					document.documentElement.style.setProperty("--shadow-2", "0");
				},
			},
			{
				page: "main",
				text: "Return",
			},
		],
	},
	{
		name: "color-confirm",
		content: ["Color scheme changed."],
		menu: [
			{
				page: "colors",
				text: "Return",
			},
		],
	},
	{
		name: "blink-confirm",
		content: ["Blinking settings changed."],
		menu: [
			{
				page: "blink",
				text: "Return",
			},
		],
	},
	{
		name: "shadow-confirm",
		content: ["Text shadow settings changed."],
		menu: [
			{
				page: "blink",
				text: "Return",
			},
		],
	},
	{
		name: "project-creation",
		content: [
			"In the past, I created this project using old JavaScript methods.",
			"",
			"However, I recently rebuilt the website from scratch using modern techniques, including object-oriented programming, CSS variables, and ES6 methods.",
			"",
			"I was able to complete the entire project in under 5 hours.",
			"-=-",
			"The website and its scripts were created entirely from scratch, without the use of any external tools such as CSS preprocessors or JavaScript frameworks.",
			"-=-",
		],
		menu: [
			{
				page: "project-edit",
				text: "Project editing",
			},
			{
				page: "main",
				text: "Return",
			},
		],
	},
	{
		name: "project-edit",
		keepSpaces: true,
		content: [
			"This project consists of 5 files:",
			"",
			"/css",
			" -main.css - This file contains the website's styles, which",
			"can be easily changed. Most important styles are stored as CSS",
			"variables.",
			"",
			"/js",
			" -pages.js - This file stores information about the website's",
			"pages, including all text content. Programmers can add their",
			"own functions to this file, which will be executed before",
			"changing pages.",
			"",
			" -Screen.js - This is the main file containing the Screen",
			"class. No changes are needed here to customize the website.",
			"",
			" -script.js - This file adds pages to the Screen class. No",
			"changes are needed here unless you want to add new features",
			"to the project.",
			"",
			"-index.html - This is the main HTML file. No page text is",
			"stored here.",
			"-=-",
		],
		menu: [
			{
				page: "project-creation",
				text: "Return",
			},
		],
	},
	{
		name: "project-use",
		content: [
			"You can customize the website to suit your needs by adjusting the blinking, text shadows, and color schemes.",
			"",
			"Keyboard shortcuts:",
			"Q - Turn off page blinking and text shadows",
			"W - Scroll up",
			"S - Scroll down",
			"-=-",
		],
		menu: [
			{
				page: "project-use-p",
				text: "Project usage for programmer",
			},
			{
				page: "main",
				text: "Return",
			},
		],
	},
	{
		name: "project-use-p",
		content: [
			"To customize the website for your own needs, edit the pages.js file located in the /assets/js directory.",
			"",
			"To create your own pages, add objects to the pages array. Each object should have three keys: name, content, and menu. An optional keepSpaces key is also available.",
			"",
			"- name: A unique identifier for the page.",
			"",
			`- content: An array of strings representing the page's content. Each string is displayed as a separate line on the page. If a string is too long, it will automatically wrap to multiple lines. An empty string ("") creates an empty line, while "-=-" creates a horizontal line.`,
			"",
			"- menu: An array of objects representing the page's menu options. Each object must have two keys: page and text. The page key specifies the identifier of the linked page, while the text key specifies the label that will be displayed on the website.",
			"",
			"- keepSpaces: If set to true, leading spaces in strings will be preserved. By default, leading spaces are removed.",
			"",
			"If a page contains very long text, it can be scrolled using either the mouse or keyboard shortcuts.",
			"-=-",
		],
		menu: [
			{
				page: "example",
				text: "Show example",
			},
			{
				page: "project-use",
				text: "Return",
			},
		],
	},
	{
		name: "example",
		keepSpaces: true,
		content: [
			`const pages = [`,
			`  {`,
			`    name: "main",`,
			`    content: [`,
			`      "Welcome to the website!",`,
			`      "",`,
			`      "Please select an option:",`,
			`    ],`,
			`    menu: [`,
			`      {`,
			`        page: "test",`,
			`        text: "Test page",`,
			`      },`,
			`    ],`,
			`  },`,
			`  {`,
			`    name: "test",`,
			`    keepSpaces: true,`,
			`    content: [`,
			`      "   This is test page, where leading spaces will be preserved.",`,
			`      "-=-",`,
			`      "      This is useful for displaying code, for example.",`,
			`    ],`,
			`    menu: [`,
			`      {`,
			`        page: "main",`,
			`        text: "Return",`,
			`      },`,
			`    ],`,
			`  },`,
			`];`,
			"-=-",
		],
		menu: [
			{
				page: "project-use-p",
				text: "Return",
			},
		],
	},
];

export default pages;
