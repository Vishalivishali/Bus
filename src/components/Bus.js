import { React } from 'react';
import Roof from './Roof/Roof';
import BusBody from './BusBody/BusBody';
import FrontGlass from './FrontGlass/FrontGlass';
import Sticker from './Sticker/Sticker';
import Doors from './Door/Doors';
import Windows from './Window/Windows';
import Led from './Led/Led';
import Road from './Road';
import Tyres from './Tyre/Tyres';

const Bus = () =>
	<div className="backgroundColor">
		<Roof/>
		<BusBody/>
		<FrontGlass/>
		<Sticker/>
		<Doors/>
		<Windows/>
		<Led/>
		<Road/>
		<Tyres/>
	</div>;

export default Bus;
