import React from 'react';
import '../assets/styles/reset.css'
import '../assets/styles/style.css'
import StartScreen from './StartScreen';
import ZapScreen from './ZapScreen';

export default function App() {

    const [screen, setScreen] = React.useState('StartScreen');

    const [goal, setGoal] = React.useState('');
    
    const [deck,setDeck] = React.useState('');

    return (
        <>
            {
                screen === 'StartScreen' ? <StartScreen setScreen={setScreen} goal={goal} setGoal={setGoal} deck={deck} setDeck={setDeck}/> : <ZapScreen goal={goal} deck={deck}/>
            }
        </>
    );
}