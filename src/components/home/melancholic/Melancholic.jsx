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
                <b>Símbolo: TERRA</b><br/>
                O melancólico se irrita bem pouco diante das impressões da alma. A reação não se produz nele ou chega depois de certo tempo. As impressões, no entanto, ficam gravadas muito profundamente na alma, sobretudo se se repetem sempre as mesmas.<br/>
                Um dos grandes destaques desse temperamento é a memória sui – ou seja, o melancólico tende a remoer muitos elementos que lhe aconteceram e sua excelente memória contribuirá para um movimento, por vezes, de remorso, em que ele segue reabrindo as feridas sem permitir que elas sarem. <br/>
                Suas principais características são: organizado, metódico, apreciador da ordem e da rotina, profundo, saudosista e inclinado à solidão e reflexão. Melancólicos possuem uma inteligência aguda e profunda e sofrem muito com frieza e ingratidão, as quais podem gerar neles feridas na alma. Gostam de ter muito claro o que deve ser feito e tendem a desaprovar as mudanças de planos, especialmente quando estas acontecem repentinamente.<br/>
                Quanto as principais fraquezas, destaca-se a forte tendência à tristeza e ao pessimismo. Melancólicos são excessivamente analistas, o que pode levá-los a um grande ceticismo e criticismo.<br/>
                O melancólico expressa: “É difícil, eu quero, mas sei que não vai dar certo”. Geralmente, são retraídos e tímidos, com dificuldade em fazerem amizade e expressarem sentimentos. Eles são materialistas e sofrem muito no processo de tomada de decisões, especialmente por ficarem pensando, inclinado ao negativo, o que os outros irão pensar sobre eles, levando-os a hesitarem em muitos momentos.<br/>
                Os melancólicos também precisam ter extremo cuidado para não caírem no ensimesmamento, em uma hipnose interna que o faz se trancar e hiper dimensionar a si mesmo e as coisas que lhe aconteceram, podendo ficar como um cachorro correndo atrás do próprio rabo. Essa tendência perigosa acaba por, naturalmente, trazer à tristeza em conjunto.

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
