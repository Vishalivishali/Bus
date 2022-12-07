import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const windowCount = 4;
const windowMultiplier = 166;
const windowMargin = 700;
const size = 100;

const windows = range(0, windowCount).map((window) => ({

	size: size,
	x: 200,
	y: (window * windowMultiplier) + windowMargin,
}));

const Windows = () =>
	windows.map((window, key) =>
		<Window key={ key } { ...window }/>);

export default Windows;
