import React from 'react';
import './cadastro.css'
import axios from 'axios';
import { Redirect, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';




const api = axios.create({
    baseURL: "http://localhost:8888"
})

const Cadastro = (props) => {
    let cookies = new Cookies();
    function handleSubmit(e) {
        e.preventDefault();
        api({
            method: 'post',
            url: '/cadastrar',
            data: {
                Name: e.target.elements.nome.value,
                Contato: e.target.elements.celular.value,
                Email: e.target.elements.email.value,
                Senha: e.target.elements.senha.value,
                About: e.target.elements.about.value,
                Cpf: e.target.elements.cpf.value
            }
        }).then((response)=>{
            if(response.status==200){
                cookies.set('logado',`${e.target.elements.cpf.value}`);
                alert('Cadastro realizado com sucesso!');
                window.location.href='/home';
            }
            else{
                alert('Não foi possível cadastrar este usuário.');
            }
        });

    }
    return (
        <div className="cadastro">
            <h3>Cadastro</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Nome completo </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="text" name="nome" className="campo" id="nameAdotante" placeholder="Nome"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Contato </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="celular" required type="tel" className="campo" id="contatoAdotante" placeholder="019 123456789"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>CPF</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="cpf" required type="text" className="campo" id='cpf' placeholder='123.456.789-10'></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>E-mail </label>
                    </div>
                </div>
                
                <div>
                    <div>
                        <input name="email" required type="email" className="campo" id="emailAdotante" placeholder="exemplodeemail@gmail.com"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Senha </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input name="senha" required type="password" className="campo" id="passwordAdotante" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Confirme senha </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="password" className="campo" id="confirmPasswordAdotante" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Sobre você </label>
                    </div>
                </div>
                <div>
                    <div>
                        <textarea name="about" required id="sobreVoceAdotante" rows="5" cols="20"></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="submit" id='btnCadastrarPessoa' value="Cadastrar"></input>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
export default Cadastro;