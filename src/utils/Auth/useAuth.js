import { useState } from 'react';
const {
  config: { apiUrl },
} = require('../../config');

export function useAuth() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  async function signIn(data) {
    try {
      setLoading(true);
      setError('');
      setData({});
      const headers = { 'Content-Type': 'application/json' };
      const body = JSON.stringify(data);
      const response = await fetch(apiUrl + '/signin', {
        method: 'POST',
        headers,
        body,
        credentials: 'include',
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError('');
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signUp(data) {
    try {
      setLoading(true);
      setError('');
      setData({});
      const headers = { 'Content-Type': 'application/json' };
      const body = JSON.stringify(data);
      const response = await fetch(apiUrl + '/signup', {
        method: 'POST',
        headers,
        body,
        credentials: 'include',
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError('');
      } else {
        setError(response.statusText);
        return ('error:', error)
      }
    } catch (error) {
      setError(error.message);
      return('error:', error)
    } finally {
      setLoading(false);
      return ('success')
    }
  }

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    signIn,
    signUp,
  };
}
