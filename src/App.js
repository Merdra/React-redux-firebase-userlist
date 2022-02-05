import React, { useState } from "react";
import "./App.css"
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {v4 as uuid} from "uuid";

const App = () => {
  const [users, setUsers] = useState([
    {name: "Mike", email: "mike@email.com", id: uuid() },
    {name: "Patrick", email: "patrick@email.com", id: uuid() },
  ]);

const addUser = (newUser) => {
  setUsers([...users, newUser])
};

const deleteUser = (id) => {
  // eslint-disable-next-line array-callback-return
  const filteredUsers = users.filter((user) => {
    if (id !== user.id) return user;
  });

  setUsers(filteredUsers);
};

  const editUser = (id, updatedUser) => {
    const updatedUsers =users.map((user) => {
      if (id === user.id) return updatedUser
      else return user
    });

    setUsers(updatedUsers);
  };

  return (
    <div>
          <UserForm addUser={addUser}  />
          <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
