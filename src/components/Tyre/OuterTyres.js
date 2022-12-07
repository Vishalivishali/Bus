import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const outerTyreCount = 2;
const outerMultiplier = 935;
const outerMargin = 230;
const size = 120;

const outerTyres = range(0, outerTyreCount).map((outerTyre) => ({

	size: size,
	x: 490,
	y: (outerTyre * outerMultiplier) + outerMargin,
}));

const OuterTyres = () =>
	outerTyres.map((outerTyre, key) =>
		<TyreStyle key={ key } { ...{ ... outerTyre, style: 'outerTyre' } }/>);

export default OuterTyres;
