import { React } from 'react';
import Roof from './Roof';
import FrontGlass from './FrontGlass';
import Sticker from './Sticker';
import RedLed from './RedLed';
import OrangeLed from './OrangeLed';

const ExtraItems = (context) =>
	<div>
		<Roof { ...context }/>
		<FrontGlass { ...context }/>
		<Sticker { ...context }/>
		<RedLed { ...context }/>
		<OrangeLed { ...context }/>
	</div>;

export default ExtraItems;
