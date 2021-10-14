import React, { useState } from 'react';
import Adotante from '../../adotante/adotante';
import biaemegue from '../../images/biaemegue.jpg'

const MinhaPagina = (props) => {    
    const [pessoa, setPessoa] = useState(
        [
            {
                nome:"Beatriz Cattaneo", 
                idade:"20",
                sobrevoce: "Energética, estagiária e ama passar tempo com doguinhos"
                // image: 
            },
            {
                nome:"Victor Mazzotti", 
                idade:"20",
                sobrevoce: "Estagiário, ama passar tempo com doguinhos e estudar sobre o que gosta"
                // image:
            },
            {
                nome:"Giovana Marques", 
                idade:"18",
                sobrevoce: "Vestibulanda, ama esportes e animais"
                // image:
            },
            {
                nome:"Ester Cattaneo", 
                idade:"17",
                sobrevoce: "Vestibulanda, ama ler e brincar com animais"
                // image:
            },
            {
                nome:"Kaio Mazzotti", 
                idade: "28",
                sobrevoce: "Gerente e vendedor, ama animais e se divertir com amigos"
                // image:
            }
        ]
    )
    
    return (
        <div className="myPage">
            <Adotante image={biaemegue} nome="Beatriz" idade="20" sobrevoce="Energética, estagiária e ama passar tempo com doguinhos" />
        </div>
    )
}
export default MinhaPagina;