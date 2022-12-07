import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const windowCount = 2;
const multiplier = 935;
const add = 230;
const size = 120;

const outerTyres = range(0, windowCount).map((outerTyre) => ({

	size: size,
	x: 490,
	y: (outerTyre * multiplier) + add,
}));

const OuterTyres = () =>
	outerTyres.map((outerTyre, key) =>
		<TyreStyle key={ key } { ...{ ... outerTyre, style: 'outerTyre' } }/>);

export default OuterTyres;
