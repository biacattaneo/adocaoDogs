import React, { useState, useEffect } from 'react';
import Adotante from '../../adotante/adotante';
import DogCard from '../../dogcard/dogcard';
import biaemegue from '../../images/biaemegue.jpg'
import axios from "axios";
import Cookies from 'universal-cookie';

const api = axios.create({
    baseURL: "http://localhost:8888"
})

const MinhaPagina = (props) => {
    // const [pessoa, setPessoa] = useState(
    //     [
    //         {
    //             nome: "Beatriz Cattaneo",
    //             idade: "20",
    //             sobrevoce: "Energética, estagiária e ama passar tempo com doguinhos"
    //             // image: 
    //         },
    //         {
    //             nome: "Victor Mazzotti",
    //             idade: "20",
    //             sobrevoce: "Estagiário, ama passar tempo com doguinhos e estudar sobre o que gosta"
    //             // image:
    //         },
    //         {
    //             nome: "Giovana Marques",
    //             idade: "18",
    //             sobrevoce: "Vestibulanda, ama esportes e animais"
    //             // image:
    //         },
    //         {
    //             nome: "Ester Cattaneo",
    //             idade: "17",
    //             sobrevoce: "Vestibulanda, ama ler e brincar com animais"
    //             // image:
    //         },
    //         {
    //             nome: "Kaio Mazzotti",
    //             idade: "28",
    //             sobrevoce: "Gerente e vendedor, ama animais e se divertir com amigos"
    //             // image:
    //         }
    //     ]
    // )

    const [dogs, setDogs] = useState([{}]);
    var newDogs = [...dogs, 
        {
            nome: "Dora",
            idade: 3,
            image: '',
            porte: "Medio",
            raça: "Vira-lata",
            castrado: "Sim",
            vacinas: "Todas"
        }
    ]

    useEffect(()=>{
        
        api.get("/get_cachorros/").then((response) => {
            console.log('oi');
            response.data.map((i)=>{
                console.log(i.nome_cachorro);
            })
            setDogs(response.data);
            // console.log(response);
        })
    },[])

    return (
        <div className="myPage">
            <Adotante image={biaemegue} nome="Beatriz" idade="20" sobrevoce="Energética, estagiária e ama passar tempo com doguinhos" />
            {dogs.map((i, index) => {
                return (
                    <div>
                        <DogCard idcachorro={i.idcachorro} key={index} nome={i.nome_cachorro} idade={i.idade} sexo={i.sexo} image={i.foto} porte={i.porte} raça={i.raça} castrado={i.castrado} vacinas={i.vacinas}></DogCard>
                    </div>
                );
            })
            }</div>
    )
}
export default MinhaPagina;