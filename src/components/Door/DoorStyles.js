import { React } from 'react';

const DoorStyles = ({ width, height, x, y, style, borderRadius, border }) =>

	<div
		style={ {
			width: `${ width }px`,
			height: `${ height }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			borderRadius: `${ borderRadius }px`,
			border: `${ border }px solid burlyWood`,
		} }
		className={ style }
	/>;

export default DoorStyles ;
