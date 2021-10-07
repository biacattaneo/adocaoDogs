import React from 'react';
import Images from '../images/image';
import './dog-card.css';

const DogCard = (props) => {    
    return (
        <div className="dogcard">
            <Images image={props.image}/>
            <p>Nome: {props.nome} - Raça: {props.raça}</p>
            <p>Idade: {props.idade} - Porte: {props.porte}</p>
        </div>
    )
}
export default DogCard;