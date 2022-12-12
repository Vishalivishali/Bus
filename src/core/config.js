import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const colors = ['#a70705', '#d777d7', '#afd3db'];
const doorCount = 2;
const doorMultiplier = 101;
const doorMargin = 294;

const innerTyreCount = 2;
const innerMultiplier = 1045;
const innerMargin = 137;

const outerTyreCount = 2;
const outerMultiplier = 1044;
const outerMargin = 118;

const windowCount = 5;
const windowMultiplier = 150;
const windowMargin = 590;

const config = { busColor: rndValue(colors),
	dimensions: { busBody:
		{ busColor: rndValue(colors),
			top: 100,
			left: 140,
			height: 450,
			width: 1370,
			border: 9,
			borderRadius: {
				topLeft: 29,
				topRight: 0,
				bottomLeft: 0,
				bottomRight: 0,
			}},
	sticker: {
		top: 260,
		left: 0,
		height: 51,
		width: 1365,
	},
	frontGlass: { top: 55,
		left: -5,
		height: 153,
		width: 147,
		borderRadius: {
			topLeft: 63,
			topRight: 7,
			bottomLeft: 14,
			bottomRight: 0,
		}},
	roof: { top: -24,
		left: 319,
		width: 1015,
		height: 16,
		borderRadius: {
			topLeft: 60,
			topRight: 60,
			bottomLeft: 0,
			bottomRight: 0,
		}},
	mainDoor: {
		top: 37,
		left: 287,
		height: 408,
		width: 208,
	},
	redLed: {
		top: 350.5,
		left: 1373,
		height: 35,
		width: 10,
	},
	orangeLed: {
		top: 385,
		left: 1373,
		height: 35,
		width: 10,
	},

	doorParts: range(0, doorCount).map((door) => ({
		height: 397,
		width: 93,
		x: 42,
		y: (door * doorMultiplier) + doorMargin,
	})),

	windows: range(0, windowCount).map((window) => ({
		size: 100,
		x: 49,
		y: (window * windowMultiplier) + windowMargin,
	})),

	innerTyres: range(0, innerTyreCount).map((tyre) => ({
		size: 75,
		x: 426,
		y: (tyre * innerMultiplier) + innerMargin,
	})),

	outerTyres: range(0, outerTyreCount).map((outerTyre) => ({
		size: 120,
		x: 407,
		y: (outerTyre * outerMultiplier) + outerMargin,
	})) }};

export default config;
