import { React } from 'react';

const busTyres = [
	'frontTyre',
	'backTyre',
	'frontTyreRim',
	'backTyreRim',
	'frontInnerTyre',
	'backInnerTyre',
];

const Tyre = () =>
	busTyres.map((busTyre, key) =>
		<div key={ key } className={ `${ busTyre }` }/>);

export default Tyre;
