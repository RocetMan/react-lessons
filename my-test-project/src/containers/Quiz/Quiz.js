import React, {Component} from 'react';
import classes from './style.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz';

class Quiz extends Component {
  state = {
    results: {}, // {[id]: 'success' 'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quiz: [
      {
        question: 'Какаого цвета небо?',
        id: 1,
        answers: [
          {
            text: 'Черный',
            id: 1,
          },
          {
            text: 'Синий',
            id: 2,
          },
          {
            text: 'Красный',
            id: 3,
          },
          {
            text: 'Зеленый',
            id: 4,
          },
        ],
        rightAnswerId: 2,
      },
      {
        question: 'В каком году основали Санет-Петербург?',
        id: 2,
        answers: [
          {
            text: '1700',
            id: 1,
          },
          {
            text: '1701',
            id: 2,
          },
          {
            text: '1702',
            id: 3,
          },
          {
            text: '1703',
            id: 4,
          },
        ],
        rightAnswerId: 4,
      },
    ],
  };

  onAnswerClickHandler = answerId => {

    const results = this.state.results;

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      if(!results[question.id]){
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {
          [answerId]: 'success',
        },

      });

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 500);

    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results

      });
    }

  };

  isQuizFinished() {

    return this.state.activeQuestion + 1 === this.state.quiz.length;

  }

  render() {

    return (
        <div className={classes.Quiz}>

          <div className={classes.QuizWrapper}>
            <h1>Ответьте на все вопросы.</h1>
            {
              this.state.isFinished ?
                  <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  /> :
                  <ActiveQuiz
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].question}
                      onAnswerClick={this.onAnswerClickHandler}
                      quizLenght={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      stateQ={this.state.answerState}
                  />
            }

          </div>

        </div>
    );
  }
}

export default Quiz;