import { useReducer } from "react";

interface IUser {
  id: number;
  username: string;
  password: string;
  role: string;
}

const initUsers: IUser[] = [
  {
    id: 1,
    username: "coolio",
    password: "secret",
    role: "user",
  },
  {
    id: 1,
    username: "drdre",
    password: "secret123",
    role: "user",
  },
];

function reducerFunc(users: IUser[], action: any) {
  switch (action.type) {
    case "ADD": {
      return [...users, action.newUser];
    }
    case "UPDATE": {
      return users.map((user) => {
        if (user.id === action.updateUser.id) {
          return action.updateUser;
        }
        return user;
      });
    }
    case "DELETE": {
      return users.map((user) => user.id !== action.id);
    }
    default: {
      return users;
    }
  }
}

export default function User() {
  const [users, dispatch] = useReducer(reducerFunc, initUsers);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & FormType;
  };

  return (
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>...</li>
    </ul>
  );
}
