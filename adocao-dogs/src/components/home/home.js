import React, {useEffect, useState} from 'react';
import DogCard from '../dogcard/dogcard';
import dora from '../images/dora.jpg';
import './home.css';
import axios from "axios";
import Cookies from 'universal-cookie';

const api = axios.create({
    baseURL: "http://localhost:8888"
})

let cookies = new Cookies();
let mydogs = [1];
const Home = (props) => {    
    

    const [dogs, setDogs] = useState([{}]);
    console.log(dogs);
    const adicionarCachorro = (nome,idade,image,porte,raça) => {
        var newDogs = [...dogs, 
            {
                nome: nome,
                idade: idade,
                image: image,
                porte: porte,
                raça: raça
            }
        ]
        // console.log(newDogs);
        setDogs(newDogs);

    }
    useEffect(()=>{
        
        api.get("/get_cachorros/").then((response) => {
            response.data.map((i)=>{
                // console.log(i.nome_cachorro);
            })
            // adicionarCachorro('Victor','20','https://i.pinimg.com/550x/7e/31/23/7e31237be7a4fa653864720072eef983.jpg','GORDO','NEGRO');
            setDogs(response.data);
            // console.log(response);
        })
    },[])

        return (
            <div>
                <div className="home">
                    <h2 id="welcome">Bem vindo ao Adote um Dog</h2>
                    
                    {dogs.map((i, index)=>{
                        return(
                            <div>
                                <DogCard idcachorro={i.idcachorro} key={index} nome={i.nome_cachorro} idade={i.idade} sexo={i.sexo} image={i.foto} porte={i.porte} raça={i.raça} castrado={i.castrado} vacinas={i.vacinas}></DogCard>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        )
}
export default Home;