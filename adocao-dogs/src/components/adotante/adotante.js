import React from 'react';

const Adotante = (props) => {    
    return (
        <div className="Adotante">
            <p>{props.image}</p>
            <p>Nome: {props.nome} - Idade: {props.idade}</p>
            <p>Sobre: {props.sobrevoce}</p>
        </div>
    )
}
export default Adotante;