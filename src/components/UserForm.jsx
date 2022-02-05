import React, { useState } from "react";
import "../App.css";
import {v4 as uuid} from "uuid";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
    };
    props.addUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>
        Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </h5>

      <h5>
        Email:{" "}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </h5>

      <input type="submit" />
    </form>
  );
};

export default UserForm;
