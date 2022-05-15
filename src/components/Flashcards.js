import React from 'react';
import Flashcard from './Flashcard';
import Arrow from "../assets/images/setinha.png";
import AnswerButton from './Answerbutton';

export default function Flashcards({quizz,setQuestion, data, setData}) {

    const [flashcard,setFlashcard] = React.useState('question');
    const buttons = [{color:'red',text:'Não lembrei'},{color:'yellow',text:'Quase não lembrei'},{color:'green',text:'Zap!'}];

    return(
        <>
            {
                flashcard === 'question' ? 
                    <Flashcard>
                        <p>{quizz.question}</p>
                        <img src={Arrow} alt="Reveal answer" onClick={()=>setFlashcard('answer')} />
                    </Flashcard> 
                    : 
                    <Flashcard>
                        <p>{quizz.answer}</p>
                        <div className="buttons">
                            {buttons.map((obj,index) => 
                            <AnswerButton key={index} color={obj.color} text={obj.text} setQuestion={setQuestion} data={data} setData={setData} />
                            )}  
                        </div>
                        
                    </Flashcard>
            }
        </>
    );
}