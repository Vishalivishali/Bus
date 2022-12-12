import { React } from 'react';
import Window from './Window';

const Windows = ({ data }) =>
	data.windows.map((window, key) =>
		<Window key={ key } { ...window }/>);

export default Windows;
