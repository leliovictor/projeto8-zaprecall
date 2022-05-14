import React from 'react';
import '../assets/styles/reset.css'
import '../assets/styles/style.css'
import StartScreen from './StartScreen';
import ZapScreen from './ZapScreen';

export default function App() {

    const [screen, setScreen] = React.useState('StartScreen');

    return (
        <>
            {
                screen === 'StartScreen' ? <StartScreen setScreen={setScreen} /> : <ZapScreen />
            }
        </>
    );
}