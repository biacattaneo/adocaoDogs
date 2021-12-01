import React from 'react';
import './cadastro.css';
import Home, {adicionarCachorro} from '../home/home';
import axios from 'axios';
var querystring = require('querystring');

const api = axios.create({
    baseURL: "http://localhost:8888"
})

const Cadastro = (props) => {
    function handleSubmit(e){
        e.preventDefault();
        api({
            method: 'post',
            url: '/set_cachorro',
            data: {
              dogName: e.target.elements.username.value,
              dogRaca: e.target.elements.raca.value,
              dogImagem: e.target.elements.imagem.value,
              dogPorte: e.target.elements.porte.value,
              dogIdade: e.target.elements.idade.value
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
                        <input type="text" name="username" className="campo"  placeholder="Bolinha"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Raça</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="raca" type="text" className="campo"  placeholder="Vira-lata"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Imagem </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="file" name="imagem" accept=".jpg,.jpeg,.png" className="campo"  placeholder="Digite o URL da imagem"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Porte </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="porte" type="text" className="campo" placeholder="Grande"  ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Idade</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input  name="idade" type="number" placeholder="3" className="campo"  ></input>
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