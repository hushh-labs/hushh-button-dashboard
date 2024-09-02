import React, { useState } from 'react';
import './CardQuestions.css'; // Link to your CSS file

function CardQuestions() {
  const [questions, setQuestions] = useState(['How would you enjoy?', 'How would you enjoy?']);

  const addNewQuestion = () => {
    setQuestions([...questions, '']);
  };

  const deleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  const updateQuestion = (indexToUpdate, newValue) => {
    const updatedQuestions = questions.map((question, index) => 
      index === indexToUpdate ? newValue : question
    );
    setQuestions(updatedQuestions);
  };

  return (
    <div className='CardQuestion__mainContainer'>
      <h4>Add Question</h4>
      <div className='CardQuestion__content'>
        <div className='CardQuestion__left'>
          {questions.map((question, index) => (
            <div key={index} className='CardQuestion__inputContainer'>
              <input
                type='text'
                value={question}
                onChange={(e) => updateQuestion(index, e.target.value)}
                className='CardQuestion__input'
              />
              <button
                className='CardQuestion__deleteButton'
                onClick={() => deleteQuestion(index)}
              >
                &#10005;
              </button>
            </div>
          ))}
          <button className='CardQuestion__addButton' onClick={addNewQuestion}>
            + Add New Question
          </button>
        </div>
      </div>
      <div className='CardQuestion__footer'>
        <label>
          <input type='checkbox' /> Terms and Conditions. <a href='#'>Apply Now</a>
        </label>
       
      </div>
    </div>
  );
}

export default CardQuestions;
