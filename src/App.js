import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register';
import Users from './components/Users';
import User from './components/User';
import Message from './utils/Messages';

import { AuthProvider } from './utils/Auth/AuthContext';
import { MessageProvider } from './utils/Messages/MessageContext';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <MessageProvider>
          <Router>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/users' component={Users} />
            <ProtectedRoute exact path='/user/:id' component={User} />
            <Route exact path='/unauthorized' component={Unauthorized} />
          </Router>
          <Message />
        </MessageProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
