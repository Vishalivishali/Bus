import { React } from 'react';

const busDoors = [
	'door',
	'rightDoor',
	'leftDoor',
];

const Door = () =>
	busDoors.map((busDoor, key) =>
		<div key={ key } className={ `${ busDoor }` }/>);

export default Door;
