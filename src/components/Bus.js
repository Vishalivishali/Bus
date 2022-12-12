import { React } from 'react';
import ExtraItems from './otherParts/ExtraItems';
import Windows from './Window/Windows';
import Doors from './Door/Doors';
import Tyres from './Tyre/Tyres';

const busStyle = ({ config }) => {
	const { dimensions: { busBody:
			{ top, left, height, width, borderRadius, border }}} = config;

	return {

		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		border: `${ border }px solid black`,
		borderTopLeftRadius: `${ borderRadius.topLeft }%`,
		borderTopRightRadius: `${ borderRadius.topRight }%`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }%`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }%`,

	};
};

const Bus = (context) =>
	<div
		className="busBody"
		style={ busStyle(context) }
	>
		<ExtraItems { ...context }/>
		<Windows { ...context }/>
		<Doors { ...context }/>
		<Tyres { ...context }/>
	</div>;

export default Bus;
