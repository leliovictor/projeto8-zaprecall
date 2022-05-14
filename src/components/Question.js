export default function Question ({index,setQuestion,question}) {
  return (
    <div className="content">
      <div className="question">
        <p className={`${question}`}>Pergunta {index+1}</p>
        <ion-icon name="play-outline" onClick={()=>setQuestion(false)}></ion-icon>
      </div>
    </div>
  );
}
