import React from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { backToDashboard } from '../../redux/actions/displayActions.js';

const BackButton = (props) => {
  return (
    <div className="back-button-container">
      <Button color="primary" className="mb-4" onClick={props.backToDashboard}>Back to dashboard</Button>
    </div>
  )
};

export default connect(null, { backToDashboard })(BackButton);