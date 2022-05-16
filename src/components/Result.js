import ResultMessage from "./ResultMessage";

let pontuation;

export default function Result({ data, numberQuestion, goal }) {

  return data.length === numberQuestion ? checkpontuation() : <></>;

  function checkpontuation() {
    if (goal === "0") {
      pontuation = data.includes("red");

    } else {
      let numberOfZaps = data.filter((item) => item === "green").length;
      pontuation = !(numberOfZaps >= goal);
    }

    return <ResultMessage result={pontuation} />;
  }
}
