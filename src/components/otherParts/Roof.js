import { React } from 'react';

const Roof = ({ config }) => {
	const
		{ dimensions:
		{ roof: { top, left, width, height, borderRadius }}} = config ;

	return (
		<div
			className="roof"

			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderTopLeftRadius: `${ borderRadius.topLeft }%`,
				borderTopRightRadius: `${ borderRadius.topRight }%`,
				borderBottomLeftRadius: `${ borderRadius.bottomLeft }%`,
				borderBottomRightRadius: `${ borderRadius.bottomRight }%`,

			} }
		/>);
};

export default Roof;
