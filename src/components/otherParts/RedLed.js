import { React } from 'react';

const RedLed = ({ config }) => {
	const
		{ dimensions: { redLed: { top, left, width, height, border }}} = config;

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
