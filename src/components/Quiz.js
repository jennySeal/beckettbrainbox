import Countdown from "react-countdown";
import TimesUp from "./TimesUp";
import axios from 'axios';
import { Spinner } from "react-bootstrap";

import { useEffect, useState} from "react";

const baseUrl = "https://opentdb.com/api.php?amount=10"
const waiting = 
<div><Spinner animation="grow" role="status" variant="warning">
<span className="visually-hidden">Loading...</span>
</Spinner>
<Spinner animation="grow" role="status" variant="info">
<span className="visually-hidden">Loading...</span>
</Spinner>
<Spinner animation="grow" role="status" variant="warning">
<span className="visually-hidden">Loading...</span>
</Spinner>
</div>

const Quiz = (username) => {

    const [quizQs, setQuizQs] = useState("");

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setQuizQs(response.data);
        })
    }, [])

    if (!quizQs) return waiting;

    const question = quizQs.results[0]
    console.log(question)
    const stringQ = question.question.toString()
    
    const stringWithoutQuotes = stringQ.replace(/&quot;/g, " ")
    const stringWithoutApostrophes = stringWithoutQuotes.replace(/&#039;/g, "'")
    const stringSanitized = stringWithoutApostrophes.replace(/&eacute;/g, "é")
    const allAnswers = question.incorrect_answers.push(question.correct_answer) 

return (
<div>
    <br/><br/>
    <h4>Question One</h4>
    <p>{stringSanitized}</p>
    {quizQs.results[0].incorrect_answers.map((answer, key) => {
        return <button className="quizButton" id={key}>{answer}</button>
    })}
    <br/>
    <Countdown className="countdown" date={Date.now() + 300000}>
    <TimesUp/>
    </Countdown>
</div>
)
}

export default Quiz;