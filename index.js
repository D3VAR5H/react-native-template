import * as React from 'react';
import { AppRegistry } from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/state/store';
import { name as appName } from './app.json';
import App from './App';

export default function Main() {
    return (
        <StoreProvider store={store}>
            {/* <PaperProvider> */}
            <App />
            {/* </PaperProvider> */}
        </StoreProvider>
    );
}

AppRegistry.registerComponent("main", () => Main);
