import React, { Component } from 'react'
import {Provider} from 'react-redux'
//PersistGate is used for the LocalStorage
import {PersistGate} from 'redux-persist/integration/react'
//we use the persistor with the store
import {store, persistor} from '../store'
import Main from './main'
import Header from './header'
import Footer from './footer'
//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/** persistGate is used for sync the provider with the localStorage */}
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Header />
            <Main/>
            <Footer />
          </div>
        </PersistGate>
      </Provider>   
    );
  }
}

export default App;
