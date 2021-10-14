import React, {useState} from 'react';
import DogCard, {teste} from '../dogcard/dogcard';
import dora from '../images/dora.jpg';
import './home.css'


const Home = (props) => {    
    const [dogs, setDogs] = useState(
        [
            {
                nome:"dora", 
                idade:'20',
                image:dora, 
                porte:"Médio", 
                raça:"vira-lata"
            },
            {
                nome:"Megue", 
                idade:'20',
                image:'https://i.pinimg.com/550x/7e/31/23/7e31237be7a4fa653864720072eef983.jpg', 
                porte:"Médio", 
                raça:"vira-lata"
            },
            {
                nome:"Fred", 
                idade:'20',
                image:'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.jpg', 
                porte:"Médio", 
                raça:"vira-lata"
            },
            {
                nome:"Spike", 
                idade:'20',
                image:'https://i2.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2020/11/rottweiler.jpg?resize=626%2C530&ssl=1', 
                porte:"Médio", 
                raça:"vira-lata"
            }
        ]
    )
    
    return (
        <div>
            <div className="home">
                <h2 id="welcome">Bem vindo ao Adote um Dog</h2>
                {dogs.map((i, index)=>{
                    return(
                    <DogCard key={index} nome={i.nome} idade={i.idade} image={i.image} porte={i.porte} raça={i.porte}></DogCard>
                    );
                })
                }
            </div>
        </div>
    )
}
export default Home;