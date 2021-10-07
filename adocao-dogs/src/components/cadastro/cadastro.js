import React from 'react';

const Cadastro = (props) => {
    return (
        <div className="cadastro">
            <h3>Cadastro</h3>
            <form>
                <div>
                    <div>
                        <p><label>Nome completo </label>
                            <input type="text" id="nameAdotante" placeholder="Nome"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Contato </label>
                            <input type="tel" id="contatoAdotante" placeholder="019 123456789"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>E-mail </label>
                            <input type="email" id="emailAdotante" placeholder="exemplodeemail@gmail.com"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Senha </label>
                            <input type="password" id="passwordAdotante" ></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Confirme senha </label>
                            <input type="password" id="confirmPasswordAdotante" ></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Sobre você </label>
                            <textarea id="sobreVoceAdotante" rows="5" cols="20"></textarea></p>
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