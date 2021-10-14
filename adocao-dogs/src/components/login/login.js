import React from 'react';

const Login = (props) => {
    return (
        <div className="cadastro">
            <h3>Login</h3>
            <form>
                <div>
                    <div>
                        <p><label>Email </label>
                            <input type="email" required className="campo" id="nameAdotante" placeholder="exemplodeemail@gmail.com"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Senha </label>
                            <input type="password" placeholder="Senha" required className="campo" id="contatoAdotante"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="submit" id="btnEntrar" value="Entrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;