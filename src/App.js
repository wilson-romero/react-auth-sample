import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register';
import Message from './Messages';

import { AuthProvider } from './Auth/AuthContext';
import { MessageProvider } from './Messages/MessageContext';

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
            <Route exact path='/unauthorized' component={Unauthorized} />
          </Router>
          <Message />
        </MessageProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
