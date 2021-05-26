import React, { useState } from 'react';
import UserList from '../components/AddUser/UsersList';
import AddUser from '../components/AddUser/AddUser';

export interface IUser {
  username: string;
  age: number;
  id?: number;
}

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([
    { username: 'darren', age: 40, id: 1 },
  ]);

  const addUser = (userItem: IUser) => {
    setUsers((user) => [...user, userItem]);
  };

  return (
    <>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </>
  );
}
