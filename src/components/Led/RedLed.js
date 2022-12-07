import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LedStyles from './LedStyles';

const redCount = 1;
const add = 1348;
const height = 35;
const width = 10;

const busLedies = range(0, redCount).map((led) => ({

	height: height,
	width: width,
	x: 425.5,
	y: led + add,
}));

const RedLed = () =>
	busLedies.map((busLed, key) =>
		<LedStyles key={ key } { ...{ ...busLed, style: 'ledRed' } }/>);

export default RedLed;
