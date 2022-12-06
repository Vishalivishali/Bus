/* eslint-disable max-lines-per-function */
import { React } from 'react';
import BusBody from './BusBody';
import Door from './Door';
import Road from './Road';
import Tyre from './Tyre';
import Windows from './Windows';

const Bus = () =>
	<div className="backgroundColor">
		<BusBody/>
		<Door/>
		<Road/>
		<Tyre/>
		<Windows/>
	</div>;

export default Bus;
