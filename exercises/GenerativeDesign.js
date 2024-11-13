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
	for (let i = 0; i < 1000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;

		//let distance = Utils.calculateDistance(width / 2, height / 2, x, y);

		//if (distance < 500) {
		//	context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 360), 50, 50);
		//} else {
		//	context.strokeStyle = "white";
		//}

		let distance = Utils.calculateDistance(width / 2, height / 2, x, y);

		if (distance < 300) {
			context.strokeStyle = "white";
		} else {
			context.strokeStyle = "red";
		}

		Utils.drawLine(x, y, width / 2, height / 2);
	}
}
