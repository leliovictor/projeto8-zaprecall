export default function Question ({index,setQuestion,question}) {
  
  const icons = {waiting:<ion-icon name="play-outline" onClick={()=>setQuestion(false)}></ion-icon>,red:<ion-icon class="red" name="close-circle"></ion-icon>,yellow:<ion-icon class="yellow" name="help-circle"></ion-icon>, green: <ion-icon class='green' name="checkmark-circle"></ion-icon>};
  
  return (
    <div className="content">
      <div className="question">
        <p className={`answer-${question}`}>Pergunta {index+1}</p>
        {icons[question]}
      </div>
    </div>
  );
}
