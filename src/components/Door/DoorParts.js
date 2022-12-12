import { React } from 'react';
import DoorStyles from './DoorStyles';

const DoorParts = ({ config }) =>
	config.dimensions.doorParts.map((doorPart, key) =>
		<DoorStyles key={ key } { ...{ ...doorPart, style: 'doorParts' } }/>);

export default DoorParts;
