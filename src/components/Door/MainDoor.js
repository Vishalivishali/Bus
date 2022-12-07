import { range } from '@laufire/utils/collection';
import { React } from 'react';
import DoorStyles from './DoorStyles';

const doorCount = 1;
const add = 469;
const height = 331;
const width = 200;

const mainDoors = range(0, doorCount).map((door) => ({

	height: height,
	width: width,
	x: 201,
	y: door + add,
}));

const MainDoor = () =>
	mainDoors.map((mainDoor, key) =>
		<DoorStyles key={ key } { ...{ ...mainDoor, style: 'mainDoor' } }/>);

export default MainDoor;
