import { React } from 'react';

const DoorStyles = ({ config }) => {
	const { dimensions:
{ mainDoor: { width, height, x, y, style }}} = config;

	<div
		style={ {
			width: `${ width }px`,
			height: `${ height }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			borderRadius: '30px',
		} }
		className={ style }
	/>;
};

export default DoorStyles ;
