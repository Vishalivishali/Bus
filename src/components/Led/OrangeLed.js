import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LedStyles from './LedStyles';

const orangeCount = 1;
const add = 1348;
const height = 35;
const width = 10;

const busLedies = range(0, orangeCount).map((led) => ({

	height: height,
	width: width,
	x: 460,
	y: led + add,
}));

const OrangeLed = () =>
	busLedies.map((busLed, key) =>
		<LedStyles key={ key } { ...{ ...busLed, style: 'ledOrange' } }/>);

export default OrangeLed;
