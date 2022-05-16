import Logo from "../assets/images/logo.png";
import Questions from "./Questions";
import Footer from "./Footer";
import React from 'react';

const deck = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
    },
    {
        question: "Usamos estado (state) para __",
        answer:
            "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
];

function shuffle() {
    return Math.random() - 0.5;
}

export default function ZapScreen() {
    const questions = deck.sort(shuffle).slice(0, 4);

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
            <Footer numberQuestion={questions.length} data={data} icons={icons}/>
        </section>
    );
}
