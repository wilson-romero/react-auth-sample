/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { useCrud } from '../utils/Crud/useCrud';

export default function User() {
  let { id } = useParams();
  const { register, handleSubmit } = useForm();
  const { get, save } = useCrud(`/users`, false);
  const [user, setUser] = useState({});

  const onSubmit = (data) => {
    save(data, id);
  };

  useEffect(() => {
    async function loadUser(){
      setUser(await get(id));
    }
    loadUser();
  }, [id]);

  const first = user && user.name && user.name.first;
  const last = user && user.name && user.name.last;
  const email = user && user.email;

  if (user) {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            placeholder='correo'
            name='email'
            ref={register}
            defaultValue={email}
          />
          <input
            type='text'
            placeholder='first name'
            name='name.first'
            ref={register}
            autoComplete='true'
            defaultValue={first}
          />
          <input
            type='text'
            placeholder='last name'
            name='name.last'
            ref={register}
            autoComplete='true'
            defaultValue={last}
          />
          <input
            type='password'
            placeholder='password'
            name='password'
            ref={register}
            autoComplete='false'
          />
          <button type='submit'>submit</button>
        </form>
        <p>
          <Link to='/users'>View users</Link>
        </p>
      </>
    );
  } else {
    return <h1>Cargando....</h1>;
  }
}
