import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Unauthorized from './components/Unauthorized';

import { AuthProvider } from './Auth/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <Route exact path='/unauthorized' component={Unauthorized} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
