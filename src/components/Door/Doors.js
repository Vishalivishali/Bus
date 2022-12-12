import { React } from 'react';
import DoorParts from './DoorParts';
import MainDoor from './MainDoor';

const Doors = (context) =>
	<div>
		<MainDoor { ...context }/>
		<DoorParts { ...context }/>
	</div>;

export default Doors;
