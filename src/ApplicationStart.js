import React from 'react';
import { Button } from '@material-ui/core';

import gif from './touch-da-fishy.gif';
import logo from './logo.jpg';

export const ApplicationStart = (props) => {
  return (
    <div className="br-square">
      <div className="br-application-background start">
        <div className="br-left-col">
          <div className="br-logo">
            <img src={logo} />
          </div>
        </div>

        <div className="br-right-col">
          <p className="br-start-title">Anschreiben Generator</p>
          <div className="br-gif">
            <img src={gif} />
          </div>
          <Button
            onClick={props.handleButtonStart}
            variant="contained"
            color="secondary"
            fullWidth="true"
            className="br-button-pink"
          >
            Abschicken
          </Button>
        </div>
      </div>
    </div>
  );
};
