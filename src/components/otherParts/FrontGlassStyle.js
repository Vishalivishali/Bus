import { React } from 'react';

const FrontGlassStyle = ({ width, height, x, y, style }) =>
	<div
		style={ {
			width: `${ width }px`,
			height: `${ height }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
		} }
		className={ style }
	/>;

export default FrontGlassStyle;