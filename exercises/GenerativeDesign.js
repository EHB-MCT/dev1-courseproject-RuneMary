"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

rect();

function rect() {
	context.lineWidth = 2;
	context.fillRect(0, 0, width, height);
	DrawLines();
}

function DrawLines() {
	for (let i = 0; i < 100; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		context.strokeStyle = "white";
		Utils.drawLine(x, y, width / 2, height / 2);
		i++;
		console.log(i);
	}
}