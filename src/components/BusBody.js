import { React } from 'react';

const busBodyParts = [
	'busBody',
	'sticker',
	'frontGlass',
	'ledRed',
	'ledOrange',
	'roofTop',
];

const BusBody = () =>
	busBodyParts.map((busBodyPart, key) =>
		<div key={ key } className={ `${ busBodyPart }` }/>);

export default BusBody;
