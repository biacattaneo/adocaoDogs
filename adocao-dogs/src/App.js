import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import Adotante from './components/adotante/adotante';
import DogCard from './components/dogcard/dogcard';
import Images from './components/images/image';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';


function App() {
  useEffect(() => {
    document.title = "Adote um dog!"
  }, []);
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
