import logo from './logo.svg';
import './App.css';
import Adotante from './components/adotante/adotante';
import DogCard from './components/dogcard/dogcard';
import Images from './components/images/image';
import Home from './components/home/home';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes />
      </BrowserRouter>
      {/* <Home/>
      <Adotante  nome="Beatriz" idade="20" sobrevoce="Energética, estagiária e ama passar tempo com doguinhos" />
      <DogCard image="dora.jpg" nome='Dora' raça='vira-lata' idade='3' porte='Médio'/> */}
    </div>
  );
}

export default App;
