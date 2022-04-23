import { useLocation, Link } from "react-router-dom";

const Answers = ({finalanswers, cleanUpData}) => {
 

    console.log(finalanswers)

    return (
        <div>
            <p className="blue">Sshhh! Don't tell anyone but here are today's answers: </p>
            {finalanswers.slice(0,10).map((question) => 
                <div className="grid-container">
                <div className="grid-item1"><p key={question.question}> Q: {cleanUpData(question.question)}</p></div>
                <div className="grid-item2"><p key={question.correct_answer} className="answer"> A: {question.correct_answer}</p></div>
            </div>)}
        </div>
    )
}

export default Answers;