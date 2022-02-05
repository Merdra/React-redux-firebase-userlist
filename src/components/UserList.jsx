import React from "react";
import Item from "./Item";

const UserList = (props) => {
  return (
    <div>
      <h1>List of Users</h1>
      {props.users.map((user, index) => {
        return (
        <Item 
        key={index}
        user={user} 
        editUser={props.editUser} 
        deleteUser={props.deleteUser} 
        />
        );
      })}
    </div>
  );
};

export default UserList;
