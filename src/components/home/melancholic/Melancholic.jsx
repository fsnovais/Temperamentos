import "./melancholic.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Melancholic() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Melancólico</h1>
                <img src="assets/melancholic.png" alt="Melancólico" />
                <div className="info">
                Pessoas com personalidade melancólica adoram tradições. As mulheres cozinham para os homens; os homens abrem as portas para as mulheres. Eles amam suas famílias e amigos e, ao contrário dos otimistas, não procuram novidades e aventuras. Ainda mais, eles evitam tanto quanto podem. As pessoas melancólicas são muito sociais e procuram contribuir para a comunidade. Sendo extremamente minuciosos e precisos, eles são gerentes fantásticos com boas personalidades.
                </div>
                    <Link className="link" to="/">Voltar ao início</Link>
            </div>
            <div className='right'>
                <img src="assets/melancholic.png" alt="Melancólico" />
                
            </div>
            </div>
        </div>
    )
}
