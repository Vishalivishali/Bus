import { React } from 'react';
import './App.scss';
import ModelBus from './components/ModelBus';
import getBusDimensions from './service/getDimensions';

const App = (context) => {
	const { config } = context;

	return <div className="getBusDimensions">
		{config.buses.map((bus, key) =>
			<ModelBus
				key={ key }
				{ ...{ ...context, data: getBusDimensions(bus) } }
			/>)}
	</div>;
};

export default App;
