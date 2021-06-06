import React from 'react';
import { useEffect, useState, useContext } from 'react';
import jwt from 'jsonwebtoken';
import useAjax from '../../hooks/useAjax.js';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const API_URL = 'https://api-js401.herokuapp.com';

function AuthProvider(props) {
  let [user, setUser] = useState({});
  let [token, setToken] = useState('');
  let [request, response] = useAjax();

  useEffect(() => {
    if (_isAValidUser(response.token)) {
      setUser(response.user);
      setToken(response.token);
      cookie.save('auth', response.token)
    }
  }, [response]);
  useEffect(() => {
    let userToken = cookie.load('auth');
    if (userToken) {
      setUsersToken(userToken);
    }
  }, []);
  const _isAValidUser = (userToken) => {
    const userIsValid = jwt.decode(userToken);
    if (userIsValid) {
      if (userIsValid.username === user.username); return true;
    } else {
      return false
    }
  }
  const loginScreen = (username, password) => {
    let options = {
      url: `${API_URL}/signin`, // setting up the route
      method: 'POST',
      headers: {
        Authorization: `${username}:${password}`
      }
    }
    request(options);
  }
  const logout = () => {
    setUser({});
    setToken('');
    cookie.remove('auth');
  }
  return (
    <AuthContext.Provider value={{ user, token, loginScreen, logout }}>
    </AuthContext.Provider>
  )
}
export default AuthProvider;