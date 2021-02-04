import React, { useState } from 'react';
import { applicationQuestions } from './applicationQuestions';

import { ApplicationStart } from './ApplicationStart';
import { ApplicationEnd } from './ApplicationEnd';
import './applicationLetter.css';

export const ApplicationLetter = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState([]);
  const [lastQuestion, setLastQuestion] = useState(false);

  const [start, setStart] = useState(false);
  function handleButtonStart() {
    setStart(true);
  }

  function handleButtonClick(answer) {
    setChosenAnswer([...chosenAnswer, answer]);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 === applicationQuestions.length) {
      setLastQuestion(true);
    }
  }

  if (lastQuestion) {
    return <ApplicationEnd outputArray={chosenAnswer} />;
  } else if (!start) {
    return <ApplicationStart handleButtonStart={handleButtonStart} />;
  } else {
    return (
      <div className="br-application-background page">
        <div className="application-status">
          <span>
            {currentQuestion + 1}/{applicationQuestions.length}
          </span>
          <span>{applicationQuestions[currentQuestion].title}</span>
          <span>Wähle einen Baustein</span>
        </div>
        <div className="br-arrows">
          <button className="br-arrow-left">&lt;</button>
          <button className="br-arrow-left">&gt;</button>
        </div>
        <div className="application-answers">
          {applicationQuestions[currentQuestion].answerOptions.map(
            (answerOption) => (
              <button onClick={() => handleButtonClick(answerOption)}>
                {answerOption}
              </button>
            )
          )}
        </div>
      </div>
    );
  }
};
