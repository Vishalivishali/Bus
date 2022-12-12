import { React } from 'react';

const OrangeLed = ({ config }) => {
	const
		{ dimensions:
		{ orangeLed: { top, left, width, height, border }}} = config;

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
