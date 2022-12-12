import { React } from 'react';
import Window from './Window';

const Windows = ({ config }) =>
	config.dimensions.windows.map((window, key) =>
		<Window key={ key } { ...window }/>);

export default Windows;
