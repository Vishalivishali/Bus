import { React } from 'react';

const Windows = ({ x, y, size, borderRadius, border }) =>
	<div
		className="window"
		style={ {
			top: `${ x }px`,
			left: `${ y }px`,
			width: `${ size }px`,
			height: `${ size }px`,
			position: 'absolute',
			borderRadius: `${ borderRadius }px`,
			border: `${ border }px solid burlywood`,
		} }
	/>;

export default Windows;
