import React from 'react';
import { Button } from '@material-ui/core';

export const OutlineStart = (props) => {
  return (
    // <div className="br-square">
    <>
      <div className="background start">
        <div className="br-left-col">
          <div>
            <img
              src={
                'https://campusjames.com/wp-content/uploads/2021/02/applicationPreview.gif'
              }
            />
          </div>
        </div>

        <div className="br-right-col">
          <p className="br-start-title br-heading">
            Gliederungs Generator
          </p>
          <p className="br-para">
            Hier kannst du dir deine Gliederung generieren lassen.
          </p>
          <Button
            onClick={props.handleButtonStart}
            variant="contained"
            color="secondary"
            className="br-button-pink br-para"
          >
            Start
          </Button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
