import { React } from 'react';

const Sticker = ({ config }) => {
	const
		{ dimensions:
			{ sticker: { top, left, width, height, border }}} = config;

	return (
		<div
			className="sticker"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default Sticker;
