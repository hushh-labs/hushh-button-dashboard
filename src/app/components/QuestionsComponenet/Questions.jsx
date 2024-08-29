import React, { useState } from 'react';
import './Questions.css';

function Questions({ onSubmit }) {
  const [questions, setQuestions] = useState([
    { question: '', answers: ['', '', '', ''] },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleQuestionChange = (questionIndex, newQuestion) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = newQuestion;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, newAnswer) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = newAnswer;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', answers: ['', '', '', ''] },
    ]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSubmit) {
      onSubmit(questions);
    }
  };

  return (
    <div className='Questions__mainContainer'>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex} className='Questions__questionContainer'>
          <label>
            Question {questionIndex + 1}:
            <input
              type='text'
              className='Questions__questionContainer__questionInput'
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(questionIndex, e.target.value)
              }
            />
          </label>
          <div className='Question__answersContainer'>
            {q.answers.map((answer, answerIndex) => (
              <div
                key={answerIndex}
                className='Question__answerOptions'
              >
                <input
                  type='text'
                  className='Question__answerInput'
                  value={answer}
                  onChange={(e) =>
                    handleAnswerChange(questionIndex, answerIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleAddQuestion} className='Questions__addButton'>
        + Add Question
      </button>
      <button onClick={handleSubmit} className='Questions__submitButton'>
        Done
      </button>
    </div>
  );
}

export default Questions;
