import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <p>
        <Link to='/login'>Login</Link>
      </p>
      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
    </div>
  );
};

export default Landing;
