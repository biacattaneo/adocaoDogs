import React, { useContext } from 'react';
import Images from '../images/image';
import './dog-card.css';

export const teste = ()=>{
    console.log('oi');
}

export const DogCard = (props) => {    
    // if(props.image==null || props.nome == null || props.idade ==null || props.porte == null || props.raça == null){
    //     return null;
    // }
    return (    
        <div className="dogcard">
            <div id="main">
                <div id="img">
                    <Images image={props.image} height='250px' width='250px'/>
                </div>
                <p id="name">Nome: {props.nome}</p> 
                <p>Raça: {props.raça}</p>
                <p id="age">Idade: {props.idade}</p>
                <p>Porte: {props.porte}</p>
            </div>
        </div>
    )
}

export default DogCard;