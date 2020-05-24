import React, { useContext } from 'react';

import { AuthContext } from '../Auth/AuthContext';

const Dashboard = (props) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
};

export default Dashboard;