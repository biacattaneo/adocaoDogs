import React from 'react';
import DogCard from '../dogcard/dogcard';
import dora from '../images/dora.jpg';
import './home.css'


const Home = (props) => {    
    return (
        <div>
            <div className="home">
                <h2 id="welcome">Bem vindo ao Adote um Dog</h2>
                <DogCard nome="dora" idade='20' image={dora} porte="Médio" raça="vira-lata"></DogCard>
                <DogCard nome="dora" idade='20' image={dora} porte="Médio" raça="vira-lata"></DogCard>
                <DogCard nome="dora" idade='20' image={dora} porte="Médio" raça="vira-lata"></DogCard>
            </div>
        </div>
    )
}
export default Home;