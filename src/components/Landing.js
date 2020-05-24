import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Auth/AuthContext';

const Landing = () => {
  const { authenticated, handleLogin } = useContext(AuthContext);
  return (
    <div>
      <h1>Landing</h1>
      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
      <p>Logged in status: {authenticated.toString()}</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Landing;
