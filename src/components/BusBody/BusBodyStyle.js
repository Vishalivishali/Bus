
import { React } from 'react';

const BusBodyStyle = ({ width, height, x, y, style }) =>
	<div
		style={ {
			width: `${ width }px`,
			height: `${ height }px`,
			top: `${ x }px`,
			left: `${ y }px`,
			position: 'absolute',
			borderRadius: '20px',
		} }
		className={ style }
	/>;

export default BusBodyStyle;
