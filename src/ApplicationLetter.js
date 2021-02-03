import React, { useState } from 'react';
import { applicationQuestions } from './applicationQuestions';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const ApplicationLetter = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState();

  function handleButtonClick() {
    
  }

  return (
    <>
      <div className="application-status">
        <span>
          {currentQuestion + 1}/{applicationQuestions.length}
        </span>
        <span>{applicationQuestions[0].title}</span>
        <span>Wähle einen Baustein</span>
      </div>
      <div className="application-answers">
        {applicationQuestions[0].answerOptions.map((answerOption) => (
          <button>{answerOption}</button>
        ))}
      </div>
    </>
  );
};

export default ApplicationLetter;
