// export const addUserAction = (user) => {
//   return {
//       type: "ADD_USER",
//       payload: user,
//   };
// };

// export const deleteUserAction = (id) => {
//   return {
//       type: "DELETE_USER",
//       payload: id,
//   };
// };

// export const editUserAction = (id, newDetails) => {
//   return {
//       type: "EDIT_USER",
//       payload: {
//         id, 
//         newDetails,
//       },
//   };
// };

export const setUsersAction = (users) => {
  return{
    type: "SET_USERS",
    payload: users,
  };
};