import React, {useEffect} from 'react';
import './App.css';
import Adotante from './components/adotante/adotante';
import DogCard from './components/dogcard/dogcard';
import Images from './components/images/image';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import dogs from './components/home/home';
import Routes from './Routes';



function App() {
  useEffect(() => {
    document.title = "Adote um dog!"
    // let cookies = new Cookies()
    // cookies.set('teste','este é o valor de teste', {path: '/'});
    // console.log(cookies.get('teste'));
  }, []);
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
          <Routes />
      </BrowserRouter>
      <footer>
        Desenvolvido por Beatriz Cattaneo e Victor Lucas Mazzotti <br /> Tipo de licenciamento: GNU
      </footer>
    </div>
  );
}

export default App;
