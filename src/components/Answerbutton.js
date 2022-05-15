export default function AnswerButton ({text, color,setQuestion}) {
    return (
    <div className={`answerButton back${color}`} onClick={()=>setQuestion(color)}>{text}</div>
    );
}