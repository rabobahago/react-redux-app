import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import CakeHookContainer from './components/CakeHookContainer';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer/>
        <CakeHookContainer/>
      </div>
    </Provider>
  );
}

export default App;
