import {createStore} from 'redux'
import {reducers} from './reducers'
//imports the redux-persist components
import {persistStore, persistReducer} from 'redux-persist'
//imports the local storage lib
import storage from 'redux-persist/lib/storage'

//set the type of storage to localStorage
const persistConfig = {
    key: 'index',
    storage,
};
//connects the configs whith the reducers
const pReducer = persistReducer(persistConfig, reducers)
//creates the store with the result
const store = createStore(pReducer)
//creates the persistor using the store
const persistor = persistStore(store)

export {store, persistor}