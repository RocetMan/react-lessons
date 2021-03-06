import React from 'react'
import classes from './style.scss'
import Button from '../UI/Button/Button'


const FinishedQuiz = props => {


  const successCount = Object.keys(props.results).reduce((total, key) => {

    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0);


    return(
        <div className={classes.finishedQuiz}>
          <ul>
            {props.quiz.map((quizItem, index) => {
              const cls = [
                'fa',
                props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                classes[props.results[quizItem.id]]
              ];

              return(
                  <li key={index}>
                      <strong>{index + 1}</strong>.
                    {quizItem.question}
                    <i className={cls.join(' ')}/>
                  </li>
              )

            })}


          </ul>
          <p>Правильно {successCount} из {props.quiz.length}</p>
          <div>
            <Button type="primary" onClick={props.onRetry}>Повторить</Button>
            <Button type="success" onClick={props.onRetry}>Перейти в спсок тестов</Button>
          </div>
        </div>
    )
};



export  default FinishedQuiz