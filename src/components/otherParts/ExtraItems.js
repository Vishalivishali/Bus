import { React } from 'react';
import Roof from './Roof';
import FrontGlass from './FrontGlass';
import Sticker from './Sticker';
import Led from './Led';

const ExtraItems = (config) =>
	<div>
		<Roof { ...config }/>
		<FrontGlass { ...config }/>
		<Sticker { ...config }/>
		<Led { ...config }/>
	</div>;

export default ExtraItems;
