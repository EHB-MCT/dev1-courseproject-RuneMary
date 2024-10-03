let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

function background() {
	context.beginPath();
	context.fillRect(50, 50, 300, 300);
	context.stroke();
}

function rects() {
	context.fillStyle = "#de9eae";
	context.beginPath();
	context.fillRect(75, 75, 50, 50);
	context.fillRect(125, 125, 50, 50);
	context.fillRect(225, 125, 50, 50);
	context.fillRect(275, 75, 50, 50);
	context.fillRect(75, 175, 250, 50);
	context.fillRect(75, 225, 50, 50);
	context.fillRect(275, 225, 50, 50);
	context.stroke();
}

background();
rects();
