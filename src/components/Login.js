/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../utils/Auth/AuthContext';
import { MessageContext } from '../utils/Messages/MessageContext';

import { Link, useHistory, withRouter } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const { authenticated, error, handleLogin } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const history = useHistory();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  useEffect(() => {
    setMessage('');
    if (authenticated) {
      history.push('/dashboard');
      setMessage('Login Success');
    } else if (error !== '') {
      setMessage('Login Denied', error);
    }
  }, [authenticated, error]);

  return (
    <div>
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='email' name='email' ref={register} />
        <input
          type='password'
          placeholder='Password'
          name='password'
          ref={register}
          autoComplete='true'
        />
        <button type='submit'>submit</button>
      </form>
      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
    </div>
  );
}

export default withRouter(Login);
