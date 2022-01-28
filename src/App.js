import React, { useState } from "react";
import "./App.css"
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([
    {name: "Mike", email: "mike@email.com" },
    {name: "Patrick", email: "patrick@email.com" },
  ]);

const addUser = (newUser) => {
  setUsers([...users, newUser])
}

  return (
    <div>
          <UserForm addUser={addUser}  />
          <UserList users={users} />
    </div>
  );
}

export default App;
