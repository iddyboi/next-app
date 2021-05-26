import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../../pages';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';

interface IProps {
  addUser: (user: IUser) => void;
}

const AddUser: FunctionComponent<IProps> = ({ addUser }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState(0);
  const [error, setError] = useState({ title: '', error: '', isError: false });

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value);
  };
  const ageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(Number(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0)
      setError({
        ...error,
        title: 'Username error',
        error: 'please enter a username',
        isError: true,
      });
    if (enteredAge < 1) setError({ ...error, isError: true });
    addUser({ username: enteredUsername, age: enteredAge, id: uuidv4() });
    setEnteredUsername('');
    setEnteredAge(0);
  };
  return (
    <>
      {error.isError && <ErrorModel title={error.title} error={error.error} />}
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            placeholder='Enter username'
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            placeholder='Enter age'
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
