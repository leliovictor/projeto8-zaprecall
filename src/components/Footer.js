import React from "react";
import Party from "../assets/images/party.png";
import Sad from "../assets/images/sad.png";
import Icon from "./shared/Icon";

export default function Footer({ numberQuestion, data, icons }) {
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
        <div className="answerIcons">
          {data.map((item, index) => (
            <Icon
              key={index}
              color={icons[item].color}
              name={icons[item].name}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
