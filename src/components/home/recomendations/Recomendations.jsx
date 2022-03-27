import "./recomendations.scss"
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Recomendations() {
    return (
       <div className="page">
               <div className="content">
                   <h1>Orientações</h1>
                   <p><b>ORIENTAÇÕES:</b> Ao escolher as características que <b>MELHOR</b> te descreve, <b>REFLITA</b> se <b>É VOCÊ NA SUA NATUREZA</b>, impulsos, tendências, estrutura (<b>TEMPERAMENTO</b>) ou <b>SE NÃO É UM COMPORTAMENTO APRENDIDO, CARATER, ACUMULO DE EXPERIÊNCIAS VIVIDAS OU SUA NATUREZA COMPRIMIDA PELO AMBIENTE QUE VOCÊ FOI CRIADO.EX. ITALIANOS SÃO MAIS QUENTES</b> ou <b>RELIGIOSOS</b> que falam manso e serenos... e você aprendeu a ser assim. (<b>PERSONALIDADE</b>).
                    Recorde suas reações e impressões dos eventos que lhe aconteceram na idade entre os 6 aos 13 anos de idade;
                    Por fim, <b>NÃO SE PRECIPITE</b>. Não use <b>UM EVENTO ALEATORIO</b> para se orientar, mas sim <b>SUA NATUREZA – REAÇÃO E IMPRESSÃO</b>, ainda que você esteja educando-os para melhor se relacionar na vida.
                    <b> BOM MERGULHO</b>!
                    </p>
                   <Link className="link" to="/questions">Iniciar o teste</Link>

               </div>
       </div>
    )
}
