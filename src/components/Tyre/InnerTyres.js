import { React } from 'react';
import TyreStyle from './TyreStyle';

const InnerTyres = ({ config }) =>
	config.dimensions.innerTyres.map((innerTyre, key) =>
		<TyreStyle
			key={ key }
			{ ...{ ...innerTyre,
				style: 'rim',
				border: `${ innerTyre.border }px dashed black` } }
		/>);

export default InnerTyres;
