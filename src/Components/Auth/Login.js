import React, { useState } from 'react';
import Alert from '../Alert';

import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { login, showRegister } from '../../redux/actions/authActions';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    props.login({ username, password });
  };

  let _alert;
  if(props._alert) {
    _alert = <Alert color={props._alert.type} message={props._alert.message} />
  } else {
    _alert = null;
  }

  let button;
  if(props.fetching) {
    button = <Spinner size="sm" color="secondary" />
  } else {
    button = <Button color="primary" className="auth-button" onClick={login} >Login</Button>
  }

  if(props.form === 'login') {
    return (
      <Form>
        {_alert}
        <h2>Login</h2>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        {button}
        <p className="toggle-auth text-primary mt-2" onClick={props.showRegister} >Register</p>
      </Form>
    )
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  form: state.auth.form,
  fetching: state.util.fetching,
  _alert: state.util._alert
});

export default connect(mapStateToProps, { login, showRegister })(Login);