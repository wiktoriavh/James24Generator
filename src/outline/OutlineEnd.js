import React, { useState } from 'react';
import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Button,
} from '@material-ui/core';

export const OutlineEnd = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit(submit) {
    submit.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 3000);
  }

  const intro = props.output.einleitung;
  intro.outline.map((bullet) => {
    console.log(bullet.title);
  });

  return (
    <>
      <div className="br-final-output">
        <span>{intro.title}</span>
        {intro.outline.map((bullet) => {
          <span key={bullet.id}>{bullet.title}</span>;
        })}
      </div>
    </>
  );
};
