import React from 'react';
import './cadastro.css'

const Cadastro = (props) => {
    return (
        <div className="cadastro">
            <h3>Cadastro</h3>
            <form>
                <div>
                    <div>
                        <label>Nome</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" required class="campo" id="nameAdotante" placeholder="Bolinha"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Raça</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="text" class="campo" id="contatoAdotante" placeholder="Vira-lata"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Imagem </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="text" class="campo" id="emailAdotante" placeholder="Digite o URL da imagem"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Porte </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="text" class="campo" placeholder="Grande" id="passwordAdotante" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Idade</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input required type="number" placeholder="3" class="campo" id="confirmPasswordAdotante" ></input>
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