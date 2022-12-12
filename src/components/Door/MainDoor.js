import { React } from 'react';

const MainDoor = ({ config }) => {
	const
		{ dimensions: { mainDoor:
		{ top, left, width, height, border, borderRadius }}} = config;

	return (
		<div
			className="mainDoor"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
				borderRadius: `${ borderRadius }px`,
			} }
		/>);
};

export default MainDoor;
