import React from "react";
import Party from "../assets/images/party.png";
import Sad from "../assets/images/sad.png";

export default function Footer({ numberQuestion, data }) {
  const icons = {
    red: <ion-icon key="0" class="red" name="close-circle"></ion-icon>,
    yellow: <ion-icon key="1" class="yellow" name="help-circle"></ion-icon>,
    green: <ion-icon key="2" class="green" name="checkmark-circle"></ion-icon>,
  };

  function result() {
    if (data.length === numberQuestion) {
      return resultPontuation();
    }
  }

  function resultPontuation() {
    if (data.includes("red")) {
      return (
        <div className="result">
          <div>
            <img src={Sad} alt="cry emoticon" />
            <h1>Putz...</h1>
          </div>
          <p> Ainda faltam alguns... Mas não desanime!</p>
        </div>
      );
    }

    return (
      <div className="result">
        <div>
          <img src={Party} alt="happy emoticon" />
          <h1>Parabéns!</h1>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    );
  }

  return (
    <footer>
      {result()}
      <div className="pontuation">
        <p>
          {data.length}/{numberQuestion} CONCLUÍDOS
        </p>
        <div className="answerIcons">{data.map((color) => icons[color])}</div>
      </div>
    </footer>
  );
}
