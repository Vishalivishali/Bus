import { React } from 'react';

const RoadWays = [
	'road',
	'crossLine',
];

const Road = () =>
	RoadWays.map((RoadWay, key) =>
		<div key={ key } className={ `${ RoadWay }` }/>);

export default Road;
