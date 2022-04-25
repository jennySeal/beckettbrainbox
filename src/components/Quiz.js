import axios from 'axios';
import { Spinner } from "react-bootstrap";
import Quizover from './Quizover';
import CountdownDisplay from "./CountdownDisplay";

import React, { useEffect, useState} from "react";

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

const baseUrl = "https://opentdb.com/api.php?amount=50"


const cleanUpData = (string) => {
    return string.replace(/&quot;/g, "").replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&eacute;/g, "é").replace()
}

const Quiz = ({name:username, score, addToScore, hasStarted}) => {

    const [quizqs, setQuizQs] = useState("");
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setQuizQs(response.data);
        })
    }, [])
    
    console.log(quizqs)
    let stringQ = 'nothing to see';
    let shuffledAnswers = ['nothing', 'to', 'see']
    const [question, setQuestion] = useState(0)
    const [quizover, setQuizover] = useState(false);
    

    if (!quizqs) {
        return waiting;
    }

    const becketizeQuestions = (questions) => {
        let unsuitableCategories = ['Entertainment: Video Games', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Television', 'Science: Computers', 'Entertainment: Musicals & Theatres', 'Entertainment: Cartoon & Animations', 'Entertainment: Comics']
        return !unsuitableCategories.includes(questions.category)  
            }

    let suitableQs = quizqs.results.filter(becketizeQuestions)

    console.log(suitableQs)

    const currentQuestion = suitableQs[question]
    console.log(currentQuestion)
    stringQ = currentQuestion.question.toString()
    
    
    const allAnswers = currentQuestion.incorrect_answers.push(currentQuestion.correct_answer) 

    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
          return arr;
        }
    }
    shuffledAnswers = shuffleArray(currentQuestion.incorrect_answers)

    const changeQuestion = (e, answer) => {
        e.preventDefault()
        if (answer === currentQuestion.correct_answer) {
            addToScore(e)
        }
        let nextQuestion = question;
        nextQuestion++
        nextQuestion < 10 ? setQuestion(nextQuestion) : quizOver();
    }

    const quizOver = (quizover) => {
        console.log('quiz is over')
        setQuizover(true);
      }
    


    const listAnswers = shuffledAnswers.map((answer, key) => {
        return <button key={answer} type="button" className="quizButton" onClick={(e)=>changeQuestion(e, answer)}>{cleanUpData(answer)}</button>
    })


    

return (
    <React.Fragment>
    {!quizover && <div>
    <br/><br/>
    <div className='questionContainer'>
    <h4>Question {question + 1}</h4>
    <p>{cleanUpData(stringQ)}</p>
    <div id="quizAnswers">
    {listAnswers}
    </div>
    <br/>
    {hasStarted && <CountdownDisplay/>}
    </div>
    </div>}


    {quizover && <div>    
    <Quizover name={username} score={score} suitableQs={suitableQs} cleanUpData={cleanUpData}/>

</div>}
</React.Fragment>  

)
}


export default Quiz;