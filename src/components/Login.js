import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Auth/AuthContext';

import { Link, useHistory, withRouter } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const { authenticated, handleLogin } = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/dashboard');
    }
  });

  return (
    <div>
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          ref={register}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          ref={register}
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
