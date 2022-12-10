import { range } from '@laufire/utils/collection';
import { React } from 'react';
import DoorStyles from './DoorStyles';

const doorCount = 2;
const doorMultiplier = 100;
const doorMargin = 469;
const height = 325;
const width = 92;

const doorParts = range(0, doorCount).map((door) => ({

	height: height,
	width: width,
	x: 204,
	y: (door * doorMultiplier) + doorMargin,
}));

const DoorParts = () =>
	doorParts.map((doorPart, key) =>
		<DoorStyles key={ key } { ...{ ...doorPart, style: 'doorParts' } }/>);

export default DoorParts;
