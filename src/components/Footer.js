import React from "react";
import Result from "./Result";
import Icon from "./shared/Icon";
import Rematch from "./Rematch";

export default function Footer({ numberQuestion, data, icons, goal, setData,setScreen}) {

  return (
    <footer>
      <Result data={data} numberQuestion={numberQuestion} goal={goal} />
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
      <Rematch data={data} numberQuestion={numberQuestion} setData={setData} setScreen={setScreen}/>
    </footer>
  );
}
