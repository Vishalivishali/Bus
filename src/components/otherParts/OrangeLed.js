import { React } from 'react';

const OrangeLed = ({ data }) => {
	const
		{ orangeLed: { top, left, width, height, border }} = data;

	return (
		<div
			className="ledOrange"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default OrangeLed;
