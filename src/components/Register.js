import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/Auth/AuthContext';
import { MessageContext } from '../utils/Messages/MessageContext';


export default function Register() {
  const { register, handleSubmit } = useForm();
  const { handleSignUp } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);

  const onSubmit = async (data) => {
    const result = await handleSignUp(data);
    setMessage(result)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='correo' name='email' ref={register} />
        <input
          type='password'
          placeholder='password'
          name='password'
          ref={register}
          autoComplete='false'
        />
        <input
          type='text'
          placeholder='first name'
          name='name.first'
          ref={register}
          autoComplete='true'
        />
        <input
          type='text'
          placeholder='last name'
          name='name.last'
          ref={register}
          autoComplete='true'
        />
        <button type='submit'>submit</button>
      </form>
      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
      <p>
        <Link to='/users'>View users</Link>
      </p>
    </>
  );
}
