import {Route, Switch, Redirect } from 'react-router-dom'
import Adotante from './components/adotante/adotante';
import Cadastro from './components/cadastro/cadastro';
import CadastroDog from './components/cadastroDog/cadastro';
import DogCard from './components/dogcard/dogcard';
import Home from './components/home/home';
import Login from './components/login/login';
import minhaPagina from './components/login/minhaPagina/minhaPagina';


const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact>
                <Home></Home>
            </Route>
            <Redirect from='/' to='/home' exact />
            <Route path="/cadastro" exact>
                <Cadastro></Cadastro>
            </Route>
            <Route path="/cadastrodog" exact>
                <CadastroDog></CadastroDog>
            </Route>
            <Route path="/login" exact>
                <Login></Login>
                {/* <DogCard image="dora.jpg" nome='Dora' raça='vira-lata' idade='3' porte='Médio'/> */}
            </Route>
            <Route path="/login/minhaPagina" exact>
                <minhaPagina />
                <Adotante  nome="Beatriz" idade="20" sobrevoce="Energética, estagiária e ama passar tempo com doguinhos" />
            </Route>
            {/* <Route path="/" exact>
                
            </Route> */}
            <Route render={() => <div>Página não encontrada</div>} exact>
            </Route>
        </Switch>
    )
}

export default Routes;