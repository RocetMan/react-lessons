import React from 'react'
import classes from './style.scss'


const AnswersItem = props => {

    const cls = [classes.AnswersItem];

    if(props.stateQ){
        cls.push(classes[props.stateQ])
    }


    return(

       <li
           className={cls.join(' ')}
           onClick={() => props.onAnswerClick(props.answer.id)}
       >
           {props.answer.text}

       </li>
    )
};

export default AnswersItem