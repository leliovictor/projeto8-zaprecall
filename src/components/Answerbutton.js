export default function AnswerButton ({text, color,setQuestion,answer}) {
    return (
    <div className={`answerButton back${color}`} onClick={()=>setQuestion(`answer-${color}`)}>{text}</div>
    );
}