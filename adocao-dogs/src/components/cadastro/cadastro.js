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
                        <input required type="text" className="campo" id="nameAdotante" placeholder="Nome"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Contato </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="tel" className="campo" id="contatoAdotante" placeholder="019 123456789"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>E-mail </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="email" className="campo" id="emailAdotante" placeholder="exemplodeemail@gmail.com"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Senha </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="password" className="campo" id="passwordAdotante" ></input>
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
                        <textarea required id="sobreVoceAdotante" rows="5" cols="20"></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="submit" value="Cadastrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Cadastro;