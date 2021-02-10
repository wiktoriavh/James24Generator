import React, { useState } from 'react';
// import { applicationQuestions } from './applicationQuestions';
import { Alert } from '@material-ui/lab';

import { ApplicationStart } from './ApplicationStart';
import { ApplicationEnd } from './ApplicationEnd';
import './applicationLetter.css';

const application = require('./applicationQuestions.json');
const questionKeys = Object.keys(application);

export const ApplicationLetter = () => {
  const [current, setCurrent] = useState(0);
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

    setChosenAnswer(constructNewObject);

    checkAnswers();
  }

  function checkAnswers() {
    if (current + 1 === questionKeys.length) {
      if (Object.keys(chosenAnswer).length === questionKeys.length) {
        setLastQuestion(true);
      } else {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 3000);
      }
    } else {
      setCurrent(current + 1);
    }
  }

  function handleNextPrevButton(input) {
    switch (input) {
      case 'next':
        checkAnswers();
        break;
      case 'prev':
        current - 1 < 0 ? setStart(false) : setCurrent(current - 1);
        break;
    }
  }

  const answerOptions =
    application[questionKeys[current]].answerOptions;
  const answerTitle = application[questionKeys[current]].title;

  if (lastQuestion) {
    return (
      <ApplicationEnd
        output={chosenAnswer}
        checkAgainst={questionKeys}
      />
    );
  } else if (!start) {
    return <ApplicationStart handleButtonStart={handleButtonStart} />;
  } else {
    return (
      <div className="br-application-background page">
        <div className="application-status">
          <span className="br-para">
            {current + 1}/{questionKeys.length}
          </span>
          <span className="br-heading">
            {application[questionKeys[current]].title}
          </span>
          <span className="br-para">Wähle einen Baustein</span>
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
          {answerOptions.map((option) => (
            <button
              key={option.id}
              className={
                Object.values(chosenAnswer).some(
                  (answer) => answer === option.answer
                )
                  ? 'br-chosen'
                  : 'br-para'
              }
              onClick={() =>
                handleButtonClick(option.answer, answerTitle)
              }
            >
              {option.answer}
            </button>
          ))}
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
