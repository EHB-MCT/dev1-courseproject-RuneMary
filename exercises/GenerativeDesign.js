"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let startLines = [];
let balls = [];

window.onmousemove = draw;

setup();
update();

function setup() {
	for (let i = 0; i < 200; i++) {
		let startLine = {
			x: Math.random() * width,
			y: Math.random() * height,
		};
		startLines.push(startLine);
	}
	for (let j = 0; j < 15; j++) {
		let ball = {
			x: Utils.randomNumber(10, width - 10),
			y: height + 50,
			color: Utils.hsl(Utils.randomNumber(140, 200), 50, 50),
		};
		balls.push(ball);
	}
}

function draw(eventData) {
	context.lineWidth = 2;
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	let PageX = eventData.pageX;
	let PageY = eventData.pageY;

	for (let i = 0; i < startLines.length; i++) {
		context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 80), 50, 50);

		Utils.drawLine(startLines[i].x, startLines[i].y, PageX, PageY);
	}
	for (let j = 0; j < balls.length; j++) {
		context.fillStyle = balls[j].color;
		Utils.fillCircle(balls[j].x, balls[j].y, 25);
	}
	context.fillStyle = "white";
	context.fillRect(1080, 430, 175, 175);
	context.fillStyle = "#de9eae";
	context.fillRect(1105, 455, 25, 25);
	context.fillRect(1130, 480, 25, 25);
	context.fillRect(1180, 480, 25, 25);
	context.fillRect(1205, 455, 25, 25);
	context.fillRect(1105, 505, 125, 25);
	context.fillRect(1105, 530, 25, 25);
	context.fillRect(1205, 530, 25, 25);
}

function update() {
	context.fillRect(0, 0, width, height);

	/*	for (let j = 0; j < balls.length; j++) {
		balls[j].y += Utils.randomNumber(-10, 0);
		draw(balls[j]);
	}*/
	for (let i = 0; i < startLines.length; i++) {
		draw(startLines[i]);
	}

	//requestAnimationFrame(update);
}
