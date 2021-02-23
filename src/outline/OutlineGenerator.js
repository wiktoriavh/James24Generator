import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';

import { OutlineStart } from './OutlineStart';
import { OutlineEnd } from './OutlineEnd';
// import './applicationLetter.css';

import { handleButtonStart } from '../_blocks/handleButtonStart';

// const outline = require('./outlineQuestions.json'); // REQUIRE
import outline from './outlineQuestions.json';

export const OutlineGenerator = () => {
  const [current, setCurrent] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState({});
  const [lastQuestion, setLastQuestion] = useState(false);
  const [warning, setWarning] = useState(false);

  const [start, setStart] = useState(false);

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

  const outlineOutput = outline.output;
  const outlineTitle = outline.questions[current].question;
  const outlineAnswers = outline.questions[current].answers;

  if (lastQuestion) {
    return <OutlineEnd output={outlineOutput} />;
  } else if (!start) {
    return (
      <OutlineStart
        handleButtonStart={() => handleButtonStart(setStart)}
      />
    );
  } else {
    return (
      <div className="background page">
        <div className="br-status">
          <span className="br-para">
            {current + 1}/{outline.questions.length}
          </span>
          <span className="br-heading">{outlineTitle}</span>
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

        <div className="br-answers">
          {outlineAnswers.map((answer) => (
            <button
              key={answer.id}
              className={
                Object.values(chosenAnswer).some(
                  (chosen) => chosen === answer.answer
                )
                  ? 'br-chosen'
                  : 'br-para'
              }
              onClick={() =>
                handleButtonClick(answer.answer, outlineTitle)
              }
            >
              {answer.answer}
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
