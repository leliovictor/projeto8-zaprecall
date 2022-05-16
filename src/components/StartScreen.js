import Logo from '../assets/images/logo.png'
import React from 'react';

export default function FirstScreen( {setScreen,setGoal} ) {
    
    function onChange(event) {
        const value = event.target.value;
        if(value >= 0 && value < 5) {
            setDisable('button');
        } else {setDisable('button disable')}
        setGoal(value);
    }

    const [disable,setDisable] = React.useState('button disable');

    return(
        <div className="firstScreen">
            <img src={Logo} alt="logo" />
            <h1>ZapRecall</h1>
            <input type="number" id="goal" placeholder='Digite sua meta de zaps... 0 a 4' onChange={onChange}/>
            <div onClick={() => disable === 'button disable' ? alert('Meta entre 1 a 4, ou 0 caso não queira nenhuma meta') : setScreen('ZapScreen')} className={disable} >Iniciar Recall!</div>
        </div>
    );
}