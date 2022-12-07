import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const tyreCount = 2;
const multiplier = 934;
const add = 250;
const size = 75;

const innerTyres = range(0, tyreCount).map((tyre) => ({

	size: size,
	x: 509,
	y: (tyre * multiplier) + add,
}));

const InnerTyres = () =>
	innerTyres.map((innerTyre, key) =>
		<TyreStyle key={ key } { ...{ ...innerTyre, style: 'rim' } }/>);

export default InnerTyres;
