import Question from "./Question";
import Flashcards from "./Flashcards";
import React from 'react';

export default function Questions ({index, quizz, data, setData, icons}) {

    const [question, setQuestion] = React.useState('waiting');

    icons.waiting = {name:"play-outline", onClick:()=>setQuestion(false)};

    return (
        <>
            {
                question ? <Question index={index} question={question} setQuestion={setQuestion} icons={icons}/> : <Flashcards setQuestion={setQuestion} quizz={quizz} data={data} setData={setData} />
            }
        </>
    );

}