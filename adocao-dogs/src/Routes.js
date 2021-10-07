import {Route, Switch, Redirect } from 'react-router-dom'
import Adotante from './components/adotante/adotante';
import DogCard from './components/dogcard/dogcard';


const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact>
                
            </Route>
            <Redirect from='/' to='/home' exact />
            <Route path="/cadastro" exact>
                
            </Route>
            <Route path="/login" exact>
                <DogCard image="dora.jpg" nome='Dora' raça='vira-lata' idade='3' porte='Médio'/>
            </Route>
            <Route path="/minhaPagina" exact>
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