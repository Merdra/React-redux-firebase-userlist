import React, { useState } from "react";
import "../App.css";
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import { addUserAction } from "../actions/action";
import { useDispatch } from "react-redux";

const UserForm = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
    };
      
      dispatch(addUserAction(newUser));

    props.addUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="App">
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

const sendActionAsProps = {
  createUser: addUserAction,
}

export default connect(null, sendActionAsProps)(UserForm);
