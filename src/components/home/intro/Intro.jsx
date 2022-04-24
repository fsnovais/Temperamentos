import "./intro.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Intro() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Teste dos temperamentos</h1>
                <img src="assets/temperamentos.png" alt="Temperamentos" />
                <div className="home-info">
                Todos nós temos um temperamento e conhecer qual é o seu e perceber qual é o dos outros pode te ajudar a construir relações mais saudáveis.
                </div>
                    <Link className="link" to="/recomendations">Descubra agora</Link>
            </div>
            <div className='right'>
                <img src="assets/temperamentos.png" alt="Temperamentos" />
                
            </div>
            </div>
        </div>
    )
}


