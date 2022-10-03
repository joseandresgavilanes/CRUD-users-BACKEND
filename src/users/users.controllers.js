const uuid = require("uuid");

const usersDB = [
  {
    id: "0fc50a91-382a-4e63-87b1-6e35355daebd",
    first_name: "Jose",
    last_name: "Gavilanes",
    email: "jose@gmail.com",
    password: "jose123",
    birthday: "2004/04/30",
  },
  {
    id: "430009dc-b802-497c-9fbc-3322aba97925",
    first_name: "Andres",
    last_name: "Carranza",
    email: "andres@gmail.com",
    password: "andres123",
    birthday: "2000/03/02",
  },
  {
    id: "daaedbef-14e9-4875-b4e4-be56596abaa0",
    first_name: "Martin",
    last_name: "Torres",
    email: "martin@gmail.com",
    password: "martin123",
    birthday: "2004/04/30",
  },
];

const getAllUsers = () => {
  return usersDB;
};

const getUserById = (id) => {
  const data = usersDB.find((user) => user.id === id);
  return data;
};

const createUser = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };
  usersDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
