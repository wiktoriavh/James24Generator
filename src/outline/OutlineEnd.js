import React, { useState } from 'react';

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
        <strong>{intro.title}</strong>
        <ol className="bullet-points">
          {intro.outline.map((bullet) => {
            return <li key={bullet.id}>{bullet.title}</li>;
          })}
        </ol>
      </div>
    </>
  );
};