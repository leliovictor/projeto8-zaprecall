import Icon from './shared/Icon';

export default function Question ({index,setQuestion,question,icons}) {

  return (
    <div className="content">
      <div className="question">
        <p className={`answer-${question}`}>Pergunta {index+1}</p>
        <Icon color={icons[question].color} name={icons[question].name} onClick={icons[question].onClick} />
      </div>
    </div>
  );
}
