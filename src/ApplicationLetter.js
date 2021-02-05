import React, { useState } from 'react';
import { applicationQuestions } from './applicationQuestions';
import { Alert } from '@material-ui/lab';

import { ApplicationStart } from './ApplicationStart';
import { ApplicationEnd } from './ApplicationEnd';
import './applicationLetter.css';

export const ApplicationLetter = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState({});
  const [lastQuestion, setLastQuestion] = useState(false);
  const [warning, setWarning] = useState(false);

  const [start, setStart] = useState(false);
  function handleButtonStart() {
    setStart(true);
  }

  function handleButtonClick(answer, title) {
    const constructNewObject = chosenAnswer;
    constructNewObject[title] = answer;
    console.log(chosenAnswer);

    setChosenAnswer(constructNewObject);

    checkAnswers();
  }

  function checkAnswers() {
    if (currentQuestion + 1 === applicationQuestions.length) {
      if (
        Object.keys(chosenAnswer).length ===
        applicationQuestions.length
      ) {
        setLastQuestion(true);
      } else {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 3000);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleNextPrevButton(input) {
    switch (input) {
      case 'next':
        checkAnswers();
        break;
      case 'prev':
        currentQuestion - 1 < 0
          ? setStart(false)
          : setCurrentQuestion(currentQuestion - 1);
        break;
    }
  }

  if (lastQuestion) {
    return (
      <ApplicationEnd
        output={chosenAnswer}
        checkAgainst={applicationQuestions}
      />
    );
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
          <button
            className="br-arrow-left"
            onClick={() => handleNextPrevButton('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="16"
              viewBox="0 0 26 16"
            >
              <path d="M13,0,26,16H0Z" />
            </svg>
          </button>
          <button
            className="br-arrow-right"
            onClick={() => handleNextPrevButton('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="16"
              viewBox="0 0 26 16"
            >
              <path d="M13,0,26,16H0Z" />
            </svg>
          </button>
        </div>
        <div className="application-answers">
          {applicationQuestions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                key={index}
                className={
                  Object.values(chosenAnswer).some(
                    (answer) => answer === answerOption
                  )
                    ? 'br-chosen'
                    : undefined
                }
                onClick={() =>
                  handleButtonClick(
                    answerOption,
                    applicationQuestions[currentQuestion].title
                  )
                }
              >
                {answerOption}
              </button>
            )
          )}
        </div>
        {warning && (
          <Alert
            className="br-warning"
            variant="filled"
            severity="warning"
          >
            Du musst alle Fragen beantworten!
          </Alert>
        )}
      </div>
    );
  }
};
