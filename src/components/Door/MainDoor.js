import { React } from 'react';

const MainDoor = ({ data }) => {
	const
		{ mainDoor:
		{ top, left, width, height, border, borderRadius }} = data;

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
