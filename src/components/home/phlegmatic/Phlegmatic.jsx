import "./phlegmatic.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Phlegmatic() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Fleumático</h1>
                <img src="assets/phlegmatic.png" alt="Fleumático" />
                <div className="info">
                As pessoas fleumáticas buscam harmonia interpessoal e relacionamentos próximos, o que torna as pessoas fleumáticas cônjuges leais e pais amorosos. Eles fazem questão de preservar seus relacionamentos com velhos amigos, familiares distantes e vizinhos. Pessoas com temperamento fleumático tendem a evitar conflitos e sempre tentam mediar entre os outros para restaurar a paz e a harmonia. Eles gostam muito de caridade e de ajudar os outros.
                </div>
                    <Link className="link" to="/">Voltar ao início</Link>
            </div>
            <div className='right'>
                <img src="assets/phlegmatic.png" alt="Fleumático" />
                
            </div>
            </div>
        </div>
    )
}
