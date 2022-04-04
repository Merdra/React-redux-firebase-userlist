// import { v4 as uuid } from "uuid";

const initialState = {
  users: [],
  student: [],
  number: [],
  isLoggedIn: false,
  age: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_USER":
    //   return { ...state, users: [...state.users, action.payload] };

    // case "EDIT_USER":
    //   const users = state.users.map((user) => {
    //     if (user.id === action.payload.id) return action.payload.newDetails;
    //     return user;
    //   });

    //   return { ...state, users: users };

    // case "DELETE_USER":
    //   const filteredUsers = state.users.filter((user) => {
    //     if (user.id !== action.payload) return user;
    //   });

    //   return { ...state, users: filteredUsers };

      case "SET_USERS":
        return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default reducer;
