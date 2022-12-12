import { React } from 'react';

const FrontGlass = ({ config }) => {
	const
		{ dimensions: { frontGlass:
			{ top, left, width, height, border, borderRadius }}} = config;

	return (
		<div
			className="frontGlass"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid burlywood`,
				borderTopLeftRadius: `${ borderRadius.topLeft }%`,
				borderTopRightRadius: `${ borderRadius.topRight }%`,
				borderBottomLeftRadius: `${ borderRadius.bottomLeft }%`,
				borderBottomRightRadius: `${ borderRadius.bottomRight }%`,
			} }
		/>);
};

export default FrontGlass;
