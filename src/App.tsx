import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './component/Main';
import Store from './features/Store';

function App() {
  return (
 <div className="container">
   <Provider store={Store}>
  <Main/>
  </Provider>
 </div>
  );
}

export default App;
