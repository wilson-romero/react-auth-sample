import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className='container'>
      Unauthorized
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </div>
  );
};

export default Unauthorized;
