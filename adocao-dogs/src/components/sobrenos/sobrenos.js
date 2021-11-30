import React, {useEffect} from 'react';
import './App.css';
import Images from './components/images/image';
import Header from './components/header/header';

const SobreNos = () => {
    return(
        <div>
            <h2>Sobre nós</h2>
            {/* <Images/> */}
            <p>Beatriz Cattaneo</p>
            <p>Graduanda de Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campinas</p>
            <p>Estagiária de desenvolvimento em Thomson Reuters Brasil</p>
            <p>Amante de livros e de animais</p>
            {/* <Images/> */}
            <p>Victor Lucas Mazzotti</p>
            <p>Graduando de Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campinas</p>
            <p>Estagiário de desenvolvimento em Thomson Reuters Brasil</p>
            <p>Amante dos animais, games e freelancer de web nas horas vagas</p>
        </div>
    )
}

export default SobreNos;