import { React } from 'react';
import ExtraItems from './otherParts/ExtraItems';
import Doors from './Door/Doors';
import Windows from './Window/Windows';
import Tyres from './Tyre/Tyres';

const busStyle = ({ config }) => {
	const { dimensions: { busBody:
			{ top, left, width, height }}} = config;

	return {

		top: `${ top }px`,
		left: `${ left }px`,
		width: `${ width }px`,
		height: `${ height }px`,
	};
};

const Bus = (context) =>
	<div
		className="busBody"
		style={ busStyle(context) }
	>
		<ExtraItems/>
		<Doors/>
		<Windows/>
		<Tyres/>
	</div>;

export default Bus;
