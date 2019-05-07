import React from 'react'
import classes from './style.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {

    return (

        <div className={classes.ActiveQuiz}>
            <p className={classes.question}>
            <span>
                    <strong>{props.answerNumber}. </strong>
                {props.question}
            </span>
                <small>{props.answerNumber} из {props.quizLenght}</small>
            </p>

            <AnswersList
                answers={props.answers}
                stateQ={props.stateQ}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    );
};


export default ActiveQuiz