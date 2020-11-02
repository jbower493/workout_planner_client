import React, { useEffect } from 'react';
import { Alert } from 'reactstrap';

import { connect } from 'react-redux';
import { clearAlert } from '../redux/actions/utilActions';

const AlertExample = (props) => {
  const { clearAlert } = props;
  useEffect(() => {
    setTimeout(() => {
      clearAlert();
    }, 5000);
  }, [clearAlert]);

  const onDismiss = () => clearAlert();

  return (
    <Alert color={props.color} isOpen={true} toggle={onDismiss}>
      {props.message}
    </Alert>
  );
};

export default connect(null, { clearAlert })(AlertExample);