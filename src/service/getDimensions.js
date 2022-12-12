/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
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

const getBusBody = ({ size, x, y, animation, direction }) => ({
	busColor: rndValue(colors),
	top: (100 * size) + x,
	left: (140 * size) + y,
	height: 450,
	width: 1370,
	border: 9,
	borderRadius: {
		topLeft: 29,
		topRight: 0,
		bottomLeft: 0,
		bottomRight: 0,
	},
	transform: direction,
	animation: animation,
});

const getSticker = ({ size }) => ({
	top: 260 * size,
	left: 0 * size,
	height: 51 * size,
	width: 1365 * size,
	border: 3 * size,
});

const getFrontGlass = ({ size }) => ({ top: 55 * size,
	left: -5 * size,
	height: 153 * size,
	width: 147 * size,
	borderRadius: {
		topLeft: 63 * size,
		topRight: 7 * size,
		bottomLeft: 14 * size,
		bottomRight: 0 * size,
		border: 3 * size,
	}});

const getRoof = ({ size }) => ({ top: -24 * size,
	left: 319 * size,
	width: 1015 * size,
	height: 16 * size,
	borderRadius: {
		topLeft: 60 * size,
		topRight: 60 * size,
		bottomLeft: 0 * size,
		bottomRight: 0 * size,
		border: 3 * size,
	}});

const getMainDoor = ({ size }) => ({
	top: 37 * size,
	left: 287 * size,
	height: 408 * size,
	width: 208 * size,
	border: 2 * size,
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
	height: 397 * size,
	width: 93 * size,
	x: 42 * size,
	y: (door * doorMultiplier) + doorMargin,
	border: 2 * size,
}));

const getWindows = ({ size }) => range(0, windowCount).map((window) => ({
	size: 100 * size,
	x: 49 * size,
	y: (window * windowMultiplier) + windowMargin,
	border: 3 * size,
}));

const getInnerTyres = ({ size }) => range(0, innerTyreCount).map((tyre) => ({
	size: 75 * size,
	x: 426 * size,
	y: (tyre * innerMultiplier) + innerMargin,
	border: 7 * size,
	borderRadius: 50 * size,
}));

const getOuterTyres = ({ size }) =>
	range(0, outerTyreCount).map((outerTyre) => ({
		size: 120 * size,
		x: 407 * size,
		y: (outerTyre * outerMultiplier) + outerMargin,
		border: 3 * size,
		borderRadius: 50 * size,
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
