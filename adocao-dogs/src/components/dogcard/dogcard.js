import React, { useContext, useEffect } from 'react';
import Images from '../images/image';
import './dog-card.css';
import Cookies from 'universal-cookie';
import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:8888"
})



export const DogCard = (props) => {

    // if(props.image==null || props.nome == null || props.idade ==null || props.porte == null || props.raça == null){
    //     return null;
    // }
    const cookies = new Cookies();


    const handleClick = () => {
        let cpf = cookies.get('logado');
        let idcachorro = props.idcachorro;
        api({
            method: 'post',
            url: '/adota',
            data: {
                cpf,
                idcachorro
            }
        }).then((response) => {
            if (response.status == 200) {
                console.log(response.data);
                if (response.data.error == 'dog_already_adopted') { // esse cachorro já foi adotado.
                    alert('Este cachorro já foi adotado.');
                } else {
                    alert('Cachorro adotado com sucesso.');
                    window.location.herf = '/home';
                }
            }
            else {
                alert('Deu ruim');

            }
        });

        // console.log(`Seu cpf é ${cpf} e você quer adotar o cachorro de id ${idcachorro}`);
    }
    return (
        <div className="dogcard">
            <div id="main">
                <div id="img">
                    <Images image={props.image} height='250px' width='250px' />
                </div>
                <p id="name">Nome: {props.nome} - Idade: {props.idade} - Sexo: {props.sexo}</p>
                <p id='dogbreed'>Raça: {props.raça} - Porte: {props.porte}</p>
                <p id='castrado'>Castrado: {props.castrado}</p>
                <p id="vacinas">Vacinas: {props.vacinas}</p>
                {cookies.get('logado') && <button onClick={handleClick} id={props.idcachorro}>Adotar</button>}
            </div>
        </div>
    )
}

export default DogCard;