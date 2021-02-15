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

  function toggleBulletPoint(el) {
    document.getElementById(el).classList.toggle('hide');
  }

  const intro = props.output.einleitung;

  return (
    <>
      <div className="br-final-output">
        <strong>{intro.title}</strong>
        <ol className="bullet-points">
          {intro.outline.map((bullet) => {
            return (
              <li key={bullet.id}>
                <span className="bullet-point" onClick={() => toggleBulletPoint(bullet.id)}>
                  {bullet.title}
                </span>
                <div className="hide" id={bullet.id}>
                  <p>Das ist ein langer Text...</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
