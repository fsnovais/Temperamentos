import "./choleric.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Choleric() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Colérico</h1>
                <img src="assets/chroleric.png" alt="Colérico" />
                <div className="info">
                Alguém com um temperamento puramente colérico geralmente é uma pessoa orientada para objetivos. As pessoas coléricas são muito experientes, analíticas e lógicas. Extremamente práticos e diretos, não são necessariamente bons companheiros ou particularmente amigáveis. Eles não gostam de pequenas conversas e gostam de conversas profundas e significativas. Eles preferem ficar sozinhos do que na companhia de pessoas superficiais e superficiais.
                </div>
                    <Link className="link" to="/">Voltar ao início</Link>
            </div>
            <div className='right'>
                <img src="assets/chroleric.png" alt="Colérico" />
                
            </div>
            </div>
        </div>
    )
}
