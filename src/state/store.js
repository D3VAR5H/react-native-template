import { applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);
    return { store, persistor };
}