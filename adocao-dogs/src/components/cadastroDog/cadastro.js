import React from 'react';
import './cadastro.css';
import Home, { adicionarCachorro } from '../home/home';
import axios from 'axios';
var querystring = require('querystring');

const api = axios.create({
    baseURL: "http://localhost:8888"
})

const Cadastro = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        api({
            method: 'post',
            url: '/set_cachorro',
            data: {
                dogName: e.target.elements.username.value,
                dogRaca: e.target.elements.raca.value,
                dogImagem: e.target.elements.imagem.value,
                dogPorte: e.target.elements.porte.value,
                dogIdade: e.target.elements.idade.value,
                dogSexo: e.target.elements.sexo.value,
                dogCastrado: e.target.elements.Cadastro.value,
                dogVacinas: e.target.elements.vacinas.value
                
            }
        });

    }
    return (
        <div className="cadastro">
            <h3>Cadastro</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <div>
                        <label>Nome</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="username" className="campo" placeholder="Bolinha"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Idade</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="idade" type="number" placeholder="3" className="campo"  ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Sexo</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="sexo" className="campo" placeholder="Fêmea"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Raça</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="raca" type="text" className="campo" placeholder="Vira-lata"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Imagem </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="imagem" className="campo" placeholder="Digite o URL da imagem"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Porte </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="porte" type="text" className="campo" placeholder="Grande" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Castrado</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="castrado" className="campo" placeholder="Sim/Não"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Vacinas</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="vacinas" className="campo" placeholder="Falta 2 dose vacina raiva"></input>
                    </div>
                </div>
                <div>
                    <div>
                        {/* <input required type="submit" value="Cadastrar" ></input> */}
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Cadastro;