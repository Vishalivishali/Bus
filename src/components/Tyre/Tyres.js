import { React } from 'react';
import InnerTyres from './InnerTyres';
import OuterTyres from './OuterTyres';

const Tyres = (context) =>
	<div>
		<OuterTyres{ ...context }/>
		<InnerTyres{ ...context }/>
	</div>;

export default Tyres;
