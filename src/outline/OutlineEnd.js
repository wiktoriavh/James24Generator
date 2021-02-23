import React, { useState } from 'react';
import { Fragment } from 'react';
import { Details } from './Details';

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

  console.group();
  console.log('hello from end');
  console.log(props);
  console.groupEnd();

  return (
    <>
      <div className="br-final-output">
        <ol>
          {props.output.map((bullet) => {
            return (
              <Fragment key={bullet.id}>
                <li>
                  <strong>{bullet.title}</strong>
                </li>
                <ol>
                  <Details details={bullet} />

                  {/* {bullet.outline.map((outline) => {
                    return (
                      <Fragment key={outline.id}>
                        <li>
                          <details>
                            <summary key={outline.id}>
                              {outline.title}
                            </summary>
                            {outline.help.map((help) => {
                              return (
                                <Fragment key={help.title}>
                                  <strong>{help.title}</strong>
                                  {help.text.map((text) => {
                                    return (
                                      <p key={text.id}>
                                        {text.paragraph}
                                      </p>
                                    );
                                  })}
                                </Fragment>
                              );
                            })}
                          </details>
                        </li>
                      </Fragment>
                    );
                  })} */}
                </ol>
              </Fragment>
            );
          })}
        </ol>
      </div>
    </>
  );
};
