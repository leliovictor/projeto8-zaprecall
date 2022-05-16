import Logo from '../assets/images/logo.png'
import React from 'react';

export default function FirstScreen( {setScreen,goal,setGoal,deck,setDeck} ) {

    const [disable, setDisable] = React.useState('button disable');

    function goals(event) {
        const value = event.target.value;
        goal = value;
        setGoal(value);

        checkDisable();
    }

    function selected(event) {
        const value = event.target.value;
        deck = value;
        setDeck(value);
        
        checkDisable();
    }

    function checkDisable() {
        if(parseInt(goal) >= 0 && parseInt(goal) < 5 && deck !== "") {
            setDisable('button')
        } else {
            setDisable('button disable')
        }
    }

    return(
        <div className="firstScreen">
            <img src={Logo} alt="logo" />
            <h1>ZapRecall</h1>
            <select name="deck" onChange={selected}>
                <option value="">Escolha seu deck</option>
                <option value="React">React</option>
                <option value="Naruto">Naruto</option>
                <option value="JavaScript">JavaScript</option>
            </select>
            <input type="number" id="goal" placeholder='Digite sua meta de zaps... 0 a 4' onChange={goals}/>
            <div onClick={() => disable === 'button disable' ? alert('Escolha seu Deck e sua Meta entre 1 a 4, ou 0 caso não queira nenhuma meta') : setScreen('ZapScreen')} className={disable} >Iniciar Recall!</div>
        </div>
    );
}