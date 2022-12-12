import { React } from 'react';
import ExtraItems from './otherParts/ExtraItems';
import Windows from './Window/Windows';
import Doors from './Door/Doors';
import Tyres from './Tyre/Tyres';

const busStyle = ({ config }) => {
	const { dimensions: { busBody:
			{ busColor, top, left, height, width,
				borderRadius, border }}} = config;

	return {

		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		backgroundColor: busColor,
		borderTopLeftRadius: `${ borderRadius.topLeft }%`,
		borderTopRightRadius: `${ borderRadius.topRight }%`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }%`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }%`,
		border: `${ border }px solid black`,

	};
};

const ModelBus = (context) =>
	<div
		className="busBody"
		style={ busStyle(context) }
	>
		<ExtraItems { ...context }/>
		<Windows { ...context }/>
		<Doors { ...context }/>
		<Tyres { ...context }/>
	</div>;

export default ModelBus;
