import React, { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Button,
} from '@material-ui/core';

export const ApplicationEnd = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <>
      <div className="br-square">
        <div className="br-application-background end">
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
                  className="br-button-pink"
                >
                  Abschicken
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="br-final-output">
        {props.outputArray.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </>
  );
};
