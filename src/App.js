import { React } from 'react';
import './App.scss';
import ModelBus from './components/ModelBus';

const App = (context) =>

	<div className="App" role="App">
		<ModelBus { ...context }/>
	</div>;

export default App;
