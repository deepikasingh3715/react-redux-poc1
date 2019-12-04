import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Container from './components/Container'
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import store from './components/reduxC/store'
//import Store from './components/Store'


function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <header className="App-header">
        
       {/* 
       
    <IceCreamContainer/>
       <CakeContainer/> 
       */}
      
         <Container/> 
      </header>
    </div>
    </Provider>
  );
}
export default App;
