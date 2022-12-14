/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const colors = ['#a70705', '#d777d7', '#afd3db'];

const image = ['/image/lady.jpg',
	'/image/lady4.jpg',
	'/image/lady5.jpg',
	'/image/lady6.jpg',
	'/image/lady7.jpg'];

const doorCount = 2;
const doorMultiplier = 80.9;
const doorMargin = 303;

const innerTyreCount = 2;
const innerMultiplier = 1045;
const innerMargin = 137;

const outerTyreCount = 2;
const outerMultiplier = 1044;
const outerMargin = 118;

const windowCount = 5;
const windowMultiplier = 150;
const windowMargin = 590;

const getBusBody = ({ size, x, y, animation }) => ({
	busColor: rndValue(colors),
	top: (100 * size) + x,
	left: (140 * size) + y,
	height: 450 * size,
	width: 1370 * size,
	border: 9 * size,
	borderRadius: {
		topLeft: 29,
		topRight: 0,
		bottomLeft: 0,
		bottomRight: 0,
	},
	animation: animation,
});

const getSticker = ({ size }) => ({
	top: 260 * size,
	left: 0 * size,
	height: 51 * size,
	width: 1365 * size,
	border: 4 * size,
});

const getFrontGlass = ({ size }) => ({ top: 55 * size,
	left: -5 * size,
	height: 153 * size,
	width: 147 * size,
	borderRadius: {
		topLeft: 63,
		topRight: 7,
		bottomLeft: 14,
		bottomRight: 0,
		border: 3,
	}});

const getRoof = ({ size }) => ({ top: -24 * size,
	left: 319 * size,
	width: 1015 * size,
	height: 16 * size,
	borderRadius: {
		topLeft: 60,
		topRight: 60,
		bottomLeft: 0,
		bottomRight: 0,
		border: 3 * size,
	}});

const getMainDoor = ({ size }) => ({
	top: 69.97 * size,
	left: 288.57 * size,
	height: 367.2 * size,
	width: 187.2 * size,
	border: 1.8 * size,
	borderRadius: 25 * size,
});

const getRedLed = ({ size }) => ({
	top: 350.5 * size,
	left: 1373 * size,
	height: 35 * size,
	width: 10 * size,
	border: 1 * size,
});

const getOrangeLed = ({ size }) => ({
	top: 385 * size,
	left: 1373 * size,
	height: 35 * size,
	width: 10 * size,
	border: 1 * size,
});

const getDoorParts = ({ size }) => range(0, doorCount).map((door) => ({
	height: 363 * size,
	width: 74 * size,
	x: 72 * size,
	y: ((door * doorMultiplier) + doorMargin) * size,
	border: 2 * size,
}));

const getWindows = ({ size }) => range(0, windowCount).map((window) => ({
	size: 100 * size,
	x: 49 * size,
	y: ((window * windowMultiplier) + windowMargin) * size,
	border: 5 * size,
	backgroundImages: image[window],
}));

const getInnerTyres = ({ size }) => range(0, innerTyreCount).map((tyre) => ({
	size: 75 * size,
	x: 426 * size,
	y: ((tyre * innerMultiplier) + innerMargin) * size,
	border: 7 * size,
	borderRadius: 50,
}));

const getOuterTyres = ({ size }) =>
	range(0, outerTyreCount).map((outerTyre) => ({
		size: 120 * size,
		x: 407 * size,
		y: ((outerTyre * outerMultiplier) + outerMargin) * size,
		border: 3 * size,
		borderRadius: 50,
	}));

const getBusDimensions = (data) => {
	const busBody = getBusBody(data);
	const sticker = getSticker(data);
	const frontGlass = getFrontGlass(data);
	const roof = getRoof(data);
	const mainDoor = getMainDoor(data);
	const redLed = getRedLed(data);
	const orangeLed = getOrangeLed(data);
	const doorParts = getDoorParts(data);
	const windows = getWindows(data);
	const innerTyres = getInnerTyres(data);
	const outerTyres = getOuterTyres(data);

	return { busBody, sticker, frontGlass, roof, mainDoor,
		redLed, orangeLed, doorParts, windows, innerTyres, outerTyres };
};

export default getBusDimensions;
