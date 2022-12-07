import { range } from '@laufire/utils/collection';
import { React } from 'react';
import BusBodyStyle from './BusBodyStyle';

const busBodyCount = 1;
const busBodyMargin = 140;
const height = 385;
const width = 1200;

const busBodies = range(0, busBodyCount).map((bus) => ({

	height: height,
	width: width,
	x: 150,
	y: bus + busBodyMargin,
}));

const BusBody = () =>
	busBodies.map((busBody, key) =>
		<BusBodyStyle key={ key } { ...{ ...busBody, style: 'busBody' } }/>);

export default BusBody;
