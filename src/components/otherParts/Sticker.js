import { React } from 'react';

const Sticker = ({ data }) => {
	const
		{ sticker: { top, left, width, height, border }} = data;

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
