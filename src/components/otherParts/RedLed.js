import { React } from 'react';

const RedLed = ({ data }) => {
	const
		{ redLed: { top, left, width, height, border }} = data;

	return (
		<div
			className="ledRed"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default RedLed;
