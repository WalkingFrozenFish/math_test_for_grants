import React, {useState} from "react";
import Questionnaire from "./containers/Questionnaire/Questionnaire";
import StartPage from "./containers/StartPage/StartPage";

const checkIsStarted = JSON.parse(localStorage.getItem('att_st_btn') || 'false')
const milliseconds = localStorage.getItem('att_mill') || '1000'

function App() {
    const [isStarted, setIsStarted] = useState(checkIsStarted)
    const [isAvailable, setIsAvailable] = useState(milliseconds && parseInt(milliseconds) > 0)
    const stopAvailable = () => {
        setIsAvailable(false)
    }
    const clickHandler = () => {
        setIsStarted(true)
        localStorage.setItem('att_st_btn', 'true')
    }

    return (
        <div>
            {!isStarted && isAvailable ? <StartPage
                click={clickHandler}
            /> : ''}
            {isStarted && isAvailable ? <Questionnaire
                stop={stopAvailable}
            /> : ''}
        </div>
    );
}

export default App;
