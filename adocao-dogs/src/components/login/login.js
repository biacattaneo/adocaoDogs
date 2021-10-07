import React from 'react';

const Login = (props) => {
    return (
        <div className="cadastro">
            <h3>Login</h3>
            <form>
                <div>
                    <div>
                        <p><label>Email </label>
                            <input type="email" id="nameAdotante" placeholder="exemplodeemail@gmail.com"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Senha </label>
                            <input type="password" id="contatoAdotante"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="submit" value="Entrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;