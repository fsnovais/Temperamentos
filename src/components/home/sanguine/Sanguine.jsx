import "./sanguine.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Sanguine() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Sanguineo</h1>
                <img src="assets/sanguine.png" alt="sanguineo" />
                <div className="info">
                Pessoas com um tipo de personalidade otimista tendem a ser animadas, otimistas, animadas e despreocupadas. Eles adoram aventura e têm alta tolerância ao risco. As pessoas sanguíneas geralmente não gostam do tédio e buscam variedade e entretenimento. Naturalmente, esse traço pode às vezes afetar negativamente seus relacionamentos românticos e outros.
                </div>
                    <Link className="link" to="/">Voltar ao início</Link>
            </div>
            <div className='right'>
                <img src="assets/sanguine.png" alt="sanguineo" />
                
            </div>
            </div>
        </div>
    )
}
