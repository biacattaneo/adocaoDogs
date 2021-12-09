import React from 'react';
import './adotante.css';
import Images from '../images/image';


const Adotante = (props) => {
    return (
        <div>
            <h2 id='h2Perfil'>Meu Perfil</h2>
            <div className="adotante">

                <div id='body'>
                    <div id='img'>
                        <Images image={props.image} height='250px' width='250px' />
                    </div>
                    <p>Nome: {props.nome} - Idade: {props.idade} - Celular: {props.celular}</p>
                    <p>Email: {props.email}</p>
                    <p>Sobre: {props.sobrevoce}</p>
                </div>
            </div>
        </div>
    )
}
export default Adotante;