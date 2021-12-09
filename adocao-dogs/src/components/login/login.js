import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const api = axios.create({
    baseURL: "http://localhost:8888"
})
const Login = (props) => {
    const cookies = new Cookies();


    function handleSubmit(e) {
        e.preventDefault();
        api({
            method: 'post',
            url: '/login',
            data: {
                Email: e.target.elements.mail.value,
                Senha: e.target.elements.password.value
            }
        }).then((response)=>{
            if(response.status==200){
                // cookies.set('logado',`${e.target.elements.cpf.value}`);
                // window.location.href='/home';
                cookies.set('logado',response.data.cpf)
                {window.location.href="/home";}
            }
        }).catch((response)=>{
            if (response.status=422){
                alert('Este usuário não foi encontrado.');
            }
            else{
                alert('Um erro inesperado aconteceu.')
            }
        });

    }
    return (
        <div className="cadastro">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <p><label>Email </label>
                            <input name="mail" type="email" required className="campo" id="nameAdotante" placeholder="exemplodeemail@gmail.com"></input></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><label>Senha </label>
                            <input name="password" type="password" placeholder="Senha" required className="campo" id="contatoAdotante"></input></p>
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