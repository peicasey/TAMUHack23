import React from 'react';
import { Button, Collapse, Alert } from 'reactstrap';

const CollapseTxt = (blurb) => {

  return (
    <div>
      <Button
        color="primary"
        onClick={function noRefCheck(){}}
        style={{
          marginBottom: '1rem'
        }}
      >
        Toggle
      </Button>
      <Collapse horizontal>
        <Alert
          style={{
            width: '500px'
          }}
        >
          {blurb}
        </Alert>
      </Collapse>
    </div>
  );
}

export default CollapseTxt;
