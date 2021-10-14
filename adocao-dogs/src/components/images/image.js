import React from 'react'
import App from '../../App'

const Images = (props) =>{
    return(
        <img src={props.image} alt="Doguinho lindo" height={props.height} width={props.width} ></img>
    )
}

export default Images;