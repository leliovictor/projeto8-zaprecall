import Logo from "../assets/images/logo.png";
import Question from "./Question";

export default function ZapScreen() {
  return (
    <section className="main-screen">
      <header>
        <img src={Logo} alt="logo" />
        <h1>ZapRecall</h1>
      </header>
      <Question />
      <Question />
      <footer>
        <p>0/4 CONCLUÍDOS</p>
      </footer>
    </section>
  );
}
