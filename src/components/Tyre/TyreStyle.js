import { React } from 'react';

const TyreStyle = ({ size, x, y, style }) =>
	<div
		style={ {
			width: `${ size }px`,
			height: `${ size }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			borderRadius: '70px',
		} }
		className={ style }
	/>;

export default TyreStyle;
