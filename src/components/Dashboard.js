import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Auth/AuthContext';

const Dashboard = (props) => {
  const { handleLogout } = useContext(AuthContext);
  const onSubmit = (e) => {
    e.preventDefault();
    handleLogout();
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={onSubmit}>Log Out</button>
      <p>
        <Link to='/register'>View register</Link>
      </p>
    </div>
  );
};

export default Dashboard;
