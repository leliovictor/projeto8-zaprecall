import Logo from '../assets/images/logo.png'

export default function FirstScreen( {setScreen} ) {
    return(
        <div className="firstScreen">
            <img src={Logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('ZapScreen')}>Iniciar Recall!</button>
        </div>
    );
}