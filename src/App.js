import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';

const App = (context) =>

	<div className="App" role="App">
		<Bus { ...context }/>
	</div>;

export default App;
