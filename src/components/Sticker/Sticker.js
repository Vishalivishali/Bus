import { range } from '@laufire/utils/collection';
import { React } from 'react';
import StickerStyle from './StickerStyle';

const stickerCount = 1;
const add = 172;
const height = 51;
const width = 1168;

const busDesigns = range(0, stickerCount).map((busSticker) => ({

	height: height,
	width: width,
	x: 385,
	y: busSticker + add,
}));

const Sticker = () =>
	busDesigns.map((busDesign, key) =>
		<StickerStyle key={ key } { ...{ ...busDesign, style: 'sticker' } }/>);

export default Sticker;
