import { React } from 'react';

const Roof = ({ data }) => {
	const
		{ roof: { top, left, width, height, borderRadius, border }} = data;

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
				border: `${ border }px solid black`,
			} }
		/>);
};

export default Roof;
