import React from "react";
import Result from "./Result";
import Icon from "./shared/Icon";

export default function Footer({ numberQuestion, data, icons }) {
  
  return (
    <footer>
      <Result data={data} numberQuestion={numberQuestion} />
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
