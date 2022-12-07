import { range } from '@laufire/utils/collection';
import { React } from 'react';
import FrontGlassStyle from './FrontGlassStyle';

const glassCount = 1;
const add = 177;
const height = 198;
const width = 51;

const busGlasses = range(0, glassCount).map((glass) => ({

	height: height,
	width: width,
	x: 148,
	y: glass + add,
}));

const FrontGlass = () =>
	busGlasses.map((busGlass, key) =>
		<FrontGlassStyle
			key={ key }
			{ ...{ ...busGlass, style: 'frontGlass' }
			}
		/>);

export default FrontGlass;
