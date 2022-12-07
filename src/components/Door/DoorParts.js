import { range } from '@laufire/utils/collection';
import { React } from 'react';
import DoorStyles from './DoorStyles';

const doorCount = 2;
const doorMultiplier = 100;
const add = 474;
const height = 319;
const width = 90;

const doorParts = range(0, doorCount).map((door) => ({

	height: height,
	width: width,
	x: 206,
	y: (door * doorMultiplier) + add,
}));

const DoorParts = () =>
	doorParts.map((doorPart, key) =>
		<DoorStyles key={ key } { ...{ ...doorPart, style: 'doorParts' } }/>);

export default DoorParts;
