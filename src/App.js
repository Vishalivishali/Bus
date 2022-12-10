import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';

const App = (context) => {
	const { config } = context;

	return <div className="App" role="App">
		<Bus { ...config }/>
	</div>;
};

export default App;
