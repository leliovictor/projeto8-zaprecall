import Party from "../assets/images/party.png";
import Sad from "../assets/images/sad.png";

export default function Result({ data, numberQuestion }) {

  return data.length === numberQuestion ? resultPontuation() : <></>;

  function resultPontuation() {
    return data.includes("red") ?
        (
        <div className="result">
          <div>
            <img src={Sad} alt="cry emoticon" />
            <h1>Putz...</h1>
          </div>
          <p> Ainda faltam alguns... Mas não desanime!</p>
        </div>
        )
    :
      (
      <div className="result">
        <div>
          <img src={Party} alt="happy emoticon" />
          <h1>Parabéns!</h1>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
      )
    ;}
}
