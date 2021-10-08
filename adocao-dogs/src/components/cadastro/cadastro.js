import React from 'react';
import './cadastro.css'

const Cadastro = (props) => {
    return (
        <div className="cadastro">
            <h3>Cadastro</h3>
            <form>
                <div>
                    <div>
                        <label>Nome completo </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" class="campo" id="nameAdotante" placeholder="Nome"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Contato </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="tel" class="campo" id="contatoAdotante" placeholder="019 123456789"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>E-mail </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="email" class="campo" id="emailAdotante" placeholder="exemplodeemail@gmail.com"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Senha </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="password" class="campo" id="passwordAdotante" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Confirme senha </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="password" class="campo" id="confirmPasswordAdotante" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Sobre você </label>
                    </div>
                </div>
                <div>
                    <div>
                        <textarea id="sobreVoceAdotante" rows="5" cols="20"></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="submit" value="Cadastrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Cadastro;