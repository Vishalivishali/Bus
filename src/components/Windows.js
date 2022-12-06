import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const windowCount = 4;
const multiplier = 187;
const size = 100;

const windows = range(1, windowCount).map((window) => ({

	size: size,
	x: 200,
	y: window * multiplier,
}));

const Windows = () =>
	windows.map((window, key) =>
		<Window key={ key } { ...window }/>);

export default Windows;
