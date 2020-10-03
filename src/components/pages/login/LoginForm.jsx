import { yupResolver } from '@hookform/resolvers';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import ErrorMessage from '../../layoutElements/ErrorMessage';

const schema = yup.object().shape({
  username: yup.string().required('Username is required').matches(/Test/),
  password: yup.string().required('You need to provide a password').min(4, 'Your password need to be atleast 4 characters').matches(/dummyPassword/)
});

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const usernameInputStyles = {
    border: errors.username ? '2px solid #872737' : '',
    borderRadius: '5px',
    height: '2em'
  }
  const passwordInputStyles = {
    border: errors.password ? '2px solid #872737' : '',
    borderRadius: '5px',
    height: '2em'
  }

  function login() {
    setIsLoggedIn(true);
  }

  return (
    <>
    {isLoggedIn ? (
      <h2 style={{ textAlign: 'center', color: '#278747' }}>You are logged in.</h2>
    ) : (
      <form onSubmit={handleSubmit(login)} style={{ margin: 'auto', width: '300px', display: 'grid', gridTemplateColumns: 'auto', gridRowGap: '10px' }}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input name='username' ref={register} autoComplete='off' id='username' style={usernameInputStyles} />
          {errors.username ?
            errors.username.type === 'matches' ?
            <ErrorMessage>Wrong username</ErrorMessage>
            : <ErrorMessage>{errors.username.message}</ErrorMessage>
            : null}
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' ref={register} autoComplete='off' id='password' style={passwordInputStyles} />
          {errors.password ?
            errors.password.type === 'matches' ?
            <ErrorMessage>Wrong password</ErrorMessage>
            : <ErrorMessage>{errors.password.message}</ErrorMessage>
            : null}
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    )}
    </>
  )
}
