import {createStore} from 'redux'
import {reducers} from './reducers'

import {persistStore, persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'index',
    storage,
};

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer);
const persistor = persistStore(store);

export {store, persistor};