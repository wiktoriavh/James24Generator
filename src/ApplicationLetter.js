import React, { useState } from 'react';
import { applicationQuestions } from './applicationQuestions';
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Button,
} from '@material-ui/core';

import './applicationLetter.css';

const ApplicationLetter = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState([]);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleButtonClick(answer) {
    setChosenAnswer([...chosenAnswer, answer]);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 === applicationQuestions.length) {
      setLastQuestion(true);
    }
  }

  function checkboxChange(changed) {
    // console.dir(changed.target.name);
    // console.log(changed);
  }

  function handleFormSubmit(submit) {
    submit.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 3000);
  }

  return lastQuestion ? (
    <>
      <div className="application-final">
        <p>Wir senden dir deine Word-Vorlage per Mail</p>

        {submitting && <span>Wird bearbeitet...</span>}

        {submitted ? (
          <div>wurde abgeschickt. :)</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <TextField
              id="application-generator-e-mail"
              label="Deine E-Mail"
              variant="filled"
              type="email"
              onChange={checkboxChange}
            />
            <FormHelperText id="application-helper-text">
              Wir teilen nie deine E-Mail mit anderen.
            </FormHelperText>
            <FormControlLabel
              control={<Checkbox name="template" />}
              label="Template OK"
              onChange={checkboxChange}
            />
            <FormControlLabel
              control={<Checkbox name="newsletter" />}
              label="Newsletter OK"
              onChange={checkboxChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
            >
              Abschicken
            </Button>
          </form>
        )}
      </div>
      <div>
        {chosenAnswer.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="application-status">
        <span>
          {currentQuestion + 1}/{applicationQuestions.length}
        </span>
        <span>{applicationQuestions[currentQuestion].title}</span>
        <span>Wähle einen Baustein</span>
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
    </>
  );
};

export default ApplicationLetter;
