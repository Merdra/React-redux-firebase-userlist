import React from "react";
//import Item from "./Item";
import { useSelector } from "react-redux";
import "../App.css";
import User from "../components/User";

//the long way
// const UserList = (props) => {
//   const users = props.users;

//   return (
//     <div>
//       <hr />
//       <h1 className="App">List of Users</h1>
//       <hr />
//       <hr />
//       {props.users.map((user, index, age) => {
//         return (
//         <Item
//         key={index}
//         age={users.age}
//         user={user}
//         editUser={props.editUser}
//         deleteUser={props.deleteUser}
//         />
//         );
//       })}
//     </div>
//   );
// };

// const getDataFromStoreAndPassItAsProps = (state) => {
//   return { users: state.users };
// };

// export default connect(getDataFromStoreAndPassItAsProps)(UserList);

//the short way
const UserList = () => {
  const users = useSelector((state) => {
    return state.users;
  });

  console.log(users);

  return (
    <div>
      <hr />
      <h1 className="App">***List of Users***</h1>
      <hr />
      <hr />
      {users.map((user, index) => {
        return <User user={user} />;
      })}
 </div>
 
  );
    };

    //  {/* {props.users.map((user, index, age) => {
//       return (
//       <Item 
//       key={index}
//       age={users.age}
//       user={user} 
//       editUser={props.editUser} 
//       deleteUser={props.deleteUser} 
//       />
//       );
//     })} */}
//     </div>
//   );
// };
export default UserList;
