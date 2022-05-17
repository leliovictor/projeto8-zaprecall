export default function Rematch ({data, numberQuestion,setData,setScreen}) {

    function resetAll () {
        setData([]);
        setScreen('StartScreen');
    }


    return data.length === numberQuestion ? render() : <></>;

    function render() {
    return(
        <div className="rematch" onClick={resetAll}>REINICIAR RECALL</div>
    );
    }
}