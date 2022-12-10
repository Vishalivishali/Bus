import { React } from 'react';

const RoofStyle = ({ width, height, x, y, style }) =>
	<div
		style={ {
			width: `${ width }px`,
			height: `${ height }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			borderRadius: '35px',
		} }
		className={ style }
	/>;

export default RoofStyle;
