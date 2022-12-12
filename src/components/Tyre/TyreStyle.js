import { React } from 'react';

const TyreStyle = ({ size, x, y, style, border }) =>
	<div
		style={ {
			width: `${ size }px`,
			height: `${ size }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			border: border,
		} }
		className={ style }
	/>;

export default TyreStyle;
