import Question from "./Question";
import Flashcards from "./Flashcards";
import React from 'react';

export default function Questions ({index, quizz, data, setData}) {

    const [question, setQuestion] = React.useState('waiting');
    
    return (
        <>
            {
                question ? <Question index={index} question={question} setQuestion={setQuestion} /> : <Flashcards setQuestion={setQuestion} quizz={quizz} data={data} setData={setData} />
            }
        </>
    );

}