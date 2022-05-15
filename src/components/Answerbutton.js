export default function AnswerButton ({text, color,setQuestion, data, setData}) {

    return (
    <div className={`answerButton back${color}`} onClick={()=>[setQuestion(color),setData([...data,color])]}>{text}</div>
    );
}