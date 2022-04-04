import React, { useEffect } from "react";
import "./App.css"
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import firebase from './firebase/config'
import { useDispatch } from "react-redux";
import { setUsersAction } from "./actions/action";

function App (){
  const dispatch = useDispatch();

  const getAllUsers = () => {
    firebase
      .firestore()
      .collection('users')
      .onSnapshot((snapshot) => {
        let users = [];

        snapshot.forEach((doc) => {
          users.push(doc.data());
      });

        dispatch(setUsersAction(users));
  });
};

  useEffect(() => {
    getAllUsers();
  }, []);


  // const [users, setUsers] = useState([
  //   {name: "Mike", email: "mike@email.com", id: uuid() },
  //   {name: "Patrick", email: "patrick@email.com", id: uuid() },
  // ]);

  // const addUser = (newUser) => {
  //   setUsers([...users, newUser])
  // };

  // const deleteUser = (id) => {
  //   // eslint-disable-next-line array-callback-return
  //   const filteredUsers = users.filter((user) => {
  //     if (id !== user.id) return user;
  //   });

  //   setUsers(filteredUsers);
  // };

  //   const editUser = (id, updatedUser) => {
  //     const updatedUsers =users.map((user) => {
  //       if (id === user.id) return updatedUser
  //       else return user
  //     });

  //     setUsers(updatedUsers);
  //   };

  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
