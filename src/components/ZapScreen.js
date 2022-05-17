import Logo from "../assets/images/logo.png";
import Questions from "./Questions";
import Footer from "./Footer";
import React from 'react';

const decks = 
    {React:[
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências",},
        {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ],
    Naruto: [
        {question: "O sonho do Naruto é virar __", answer: "hokage"},
        {question:'O primeiro professor do Naruto foi o __', answer:'Iruka'},
        {question:'__ são os membros do time 7',answer:'Naruto, Sasuke e Sakura'},
        {question:'Itachi é o irmão mais velho de __',answer:'sasuke'},
        {question:'__ se tornou a quinta hokage',answer:'Tsunade'},
        {question:'A raposa de __ foi selada dentro do Naruto bebê',answer:'9 caudas'},
        {question:'O primeiro vilão do Naruto se chamava __',answer:'Mizuki'} ,
        {question:'Sasuke foi amaldiçoada durante o exame __',answer:'chunnin'} 
    ],
    JavaScript:[
        {question:"No elemento HTML que colocamos o JavaScript através da tag __", answer:"<script>"},
        {question:"O __ serve para mudar o conteudo de um HTML elemento", answer:"innerHTML"},
        {question:"Adicionando o <script> dentro do __", answer:"body"},
        {question:"Uma outra forma de escrever no javaScript é através do __", answer:"template string"},
        {question:"Usamos __ para escrever como comentário dentro do Javascript", answer:"//"},
        {question:"Entre var, let and const, aquele que foi deixado de usar foi o __", answer:"var"},
        {question:"Usamos a função __ arredondar números 'float'", answer:"Math.round(number), Math.cell(number), Math.floor(number)"},
        {question:"Para chamar uma função nomeada de myFunction, usamos __", answer:"myFunction()"}
    ]}
;

function shuffle() {
    return Math.random() - 0.5;
}

export default function ZapScreen({goal,deck,setScreen}) {
    const questions = decks[deck].sort(shuffle).slice(0, 4);

    const [data,setData] = React.useState([]);

    const icons = {
        red:{color:"red", name:"close-circle"},
        yellow:{color:"yellow", name:"help-circle"}, 
        green: {color:'green', name:"checkmark-circle"}
      };

    return (
        <section className="main-screen">
            <header>
                <img src={Logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            {questions.map((item, index) => (
                <Questions key={index} index={index} quizz={questions[index]} data={data} setData={setData} icons={icons}/>
            ))};
            <Footer numberQuestion={questions.length} data={data} setData={setData} icons={icons} goal={goal} setScreen={setScreen} />
        </section>
    );
}
