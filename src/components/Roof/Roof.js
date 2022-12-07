import { range } from '@laufire/utils/collection';
import { React } from 'react';
import RoofStyle from './RoofStyle';

const roofCount = 1;
const add = 260;
const height = 15;
const width = 1050;

const busRoofs = range(0, roofCount).map((roof) => ({

	height: height,
	width: width,
	x: 135,
	y: roof + add,
}));

const Roof = () =>
	busRoofs.map((busRoof, key) =>
		<RoofStyle
			key={ key }
			{ ...{ ...busRoof, style: 'roofTop' }
			}
		/>);

export default Roof;
