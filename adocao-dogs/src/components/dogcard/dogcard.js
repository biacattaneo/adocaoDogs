import React from 'react';
import Images from '../images/image';
import './dog-card.css';

const DogCard = (props) => {    
    if(props.image==null || props.nome == null || props.idade ==null || props.porte == null || props.raça == null){
        return null;
    }
    
    return (
        
        <div className="dogcard">
            <div id="main">

                <div id="img">
                    <Images image={props.image}/>
                </div>
                <p id="name">Nome: {props.nome} - Raça: {props.raça}</p>
                <p id="age">Idade: {props.idade} - Porte: {props.porte}</p>
            </div>
        </div>
    )
}
export default DogCard;