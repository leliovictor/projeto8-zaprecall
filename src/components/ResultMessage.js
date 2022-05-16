import Party from "../assets/images/party.png";
import Sad from "../assets/images/sad.png";

const message = [
  {
    image: Sad,
    title: "Putz...",
    message: "Ainda faltam alguns... Mas não desanime!",
  },
  {
    image: Party,
    title: "Parabéns",
    message: "Você não esqueceu de nenhum flashcard!",
  },
];

export default function ResultMessage({ result }) {
  const number = result ? 0 : 1;

  return (
    <div className="result">
      <div>
        <img src={message[number].image} alt="" />
        <h1>{message[number].title}</h1>
      </div>
      <p> {message[number].message}</p>
    </div>
  );
}
