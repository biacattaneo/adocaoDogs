import React, { useEffect } from 'react';
import Images from '../images/image';
import './sobrenos.css';
import biaedora from '../images/biaedora.jpg';
import victoremegue from '../images/victoremegue.jpg';

const SobreNos = () => {
    return (
        <div>
            <h2 id='TitleSobreNos'>Sobre nós</h2>
            <div className='sobreNosClass'>
                <div id='cardNos'>
                    <div id='fotoNos'>
                        <Images image={biaedora} height={'270px'} width={'400px'}/>
                    </div>
                    <p>Beatriz Cattaneo</p>
                    <p>Graduanda de Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campinas</p>
                    <p>Estagiária de desenvolvimento em Thomson Reuters Brasil</p>
                    <p>Mãe da Dora, amante de livros e de animais</p><br />
                    <div id='fotoNos'>
                    <Images image={victoremegue} height={'270px'} width={'200px'}/>
                    </div>
                    <p>Victor Lucas Mazzotti</p>
                    <p>Graduando de Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campinas</p>
                    <p>Estagiário de desenvolvimento em Thomson Reuters Brasil</p>
                    <p>Pai da Megue, amante dos animais, games e freelancer de web nas horas vagas</p>
                </div>
            </div>
        </div>
    )
}

export default SobreNos;