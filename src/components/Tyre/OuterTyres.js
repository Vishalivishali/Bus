import { React } from 'react';
import TyreStyle from './TyreStyle';

const OuterTyres = ({ config }) =>
	config.dimensions.outerTyres.map((outerTyre, key) =>
		<TyreStyle
			key={ key }
			{ ...{ ... outerTyre,
				style: 'outerTyre',
				border: `${ outerTyre.border }px solid burlywood` } }
		/>);

export default OuterTyres;
