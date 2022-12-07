import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const innerTyreCount = 2;
const innerMultiplier = 934;
const innerMargin = 250;
const size = 75;

const innerTyres = range(0, innerTyreCount).map((tyre) => ({

	size: size,
	x: 509,
	y: (tyre * innerMultiplier) + innerMargin,
}));

const InnerTyres = () =>
	innerTyres.map((innerTyre, key) =>
		<TyreStyle key={ key } { ...{ ...innerTyre, style: 'rim' } }/>);

export default InnerTyres;
