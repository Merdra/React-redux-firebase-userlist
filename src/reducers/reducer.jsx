import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { id: uuid(), name: "Merdra", email: "merdra08@gmail.com" },
    { id: uuid(), name: "Eugenia", email: "eugy22@email.com" },
    { id: uuid(), name: "Prudent", email: "prudy@email.com" },
  ],
  student: [],
  number: [],
  isLoggedIn: false,
  age: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload.newDetails;
        return user;
      });

      return { ...state, users: users };

    case "DELETE_USER":
      const filteredUsers = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });

      return { ...state, users: filteredUsers };

    default:
      return state;
  }
};

export default reducer;
