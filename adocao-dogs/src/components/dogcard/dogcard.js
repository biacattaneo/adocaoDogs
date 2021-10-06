import React from 'react';
import './dog-card.css';
const dogcard = (props) => {    
    return (
        <div className="dogcard">
            <p>{props.nome}</p>
            <p>{props.raça}</p> 
            <p>{props.idade}</p> 
            <p>{props.porte}</p>
        </div>
    )
}
export default dogcard;