import React, { Component } from 'react';
import Main from './components/main';
import './App.css';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <h2> Lista de tarefas</h2>
            <Main/>
          </div>
        </PersistGate>
      </Provider>   
    );
  }
}

export default App;
