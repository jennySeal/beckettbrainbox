import {useState, useContext} from 'react'
import UsernameContext from "./UsernameContext";
import Answers from "./Answers"

const Quizover = ({score, suitableQs, cleanUpData}) => {
 
    const finalAnswers = suitableQs.slice(0,10)
    const [showQA, setShowQA] = useState(false)

    const name = useContext(UsernameContext) 
    const showAnswers = () => {
        setShowQA(true)
    }
    
    return (
    <div className="quizover">
    {!showQA && <><p>The challenge is over, {name}!</p>
    <br/>
    <h4>You scored {score} points.</h4>
    <br/>
    <br/>
    <button onClick={showAnswers}>Click to view answers</button></>}
    {showQA && <Answers finalanswers={finalAnswers} cleanUpData={cleanUpData}/>}    
    </div>
    )

    }
export default Quizover;
    