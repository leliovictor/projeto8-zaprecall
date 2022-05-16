import React from 'react';
import '../assets/styles/reset.css'
import '../assets/styles/style.css'
import StartScreen from './StartScreen';
import ZapScreen from './ZapScreen';

export default function App() {

    const [screen, setScreen] = React.useState('StartScreen');

    const [goal, setGoal] = React.useState('');

    return (
        <>
            {
                screen === 'StartScreen' ? <StartScreen setScreen={setScreen} setGoal={setGoal}/> : <ZapScreen goal={goal} />
            }
        </>
    );
}