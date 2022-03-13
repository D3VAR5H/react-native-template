import * as React from 'react';
import { AppRegistry } from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './src/state/store';
import { name as appName } from './app.json';
import App from './App';

export default function Main() {
	const { store, persistor } = reduxStore();

	return (
		<StoreProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* <PaperProvider> */}
				<App />
				{/* </PaperProvider> */}
			</PersistGate>
		</StoreProvider>
	);
}

AppRegistry.registerComponent('main', () => Main);
