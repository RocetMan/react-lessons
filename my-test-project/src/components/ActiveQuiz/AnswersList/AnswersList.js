import React from 'react'
import classes from './style.scss'
import AnswersItem from './AnswersItem/AnswersItem'


const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswersItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    stateQ={props.stateQ ? props.stateQ[answer.id] : null}
                />
            )
        })}
    </ul>
);


export default AnswersList