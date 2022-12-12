import { React } from 'react';
import DoorStyles from './DoorStyles';

const DoorParts = ({ data }) =>
	data.doorParts.map((doorPart, key) =>
		<DoorStyles key={ key } { ...{ ...doorPart, style: 'doorParts' } }/>);

export default DoorParts;
