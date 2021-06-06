import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './authprovider.js'
import useForm from '../../hooks/useForm.js'

function If({ condition, children }) {
  return condition ? children : null;
}

function Login() {
  let context = useContext(AuthContext);
  let [handleInputChange, handleSubmit] = useForm(handleLogin);

  function handleLogin(userCredentials) {
    context.login(userCredentials.username, userCredentials.password);
  }
  return (
    <div>
      <If condition={!context.token}>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleInputChange}/>
          <input name="password" onChange={handleInputChange}/>
          <button type="submit">Login</button>
        </form>
      </If>
      <If condition={context.token}>
        <button onclick={context.logout}>Log Out</button>
      </If>
    </div>
  )
}
export default Login;