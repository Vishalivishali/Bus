import { React } from 'react';
import TyreStyle from './TyreStyle';

const InnerTyres = ({ data }) =>
	data.innerTyres.map((innerTyre, key) =>
		<TyreStyle
			key={ key }
			{ ...{ ...innerTyre,
				style: 'rim',
				border: `${ innerTyre.border }px dashed black` } }
		/>);

export default InnerTyres;
