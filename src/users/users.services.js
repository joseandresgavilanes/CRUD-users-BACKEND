const { getAllUsers, getUserById, createUser } = require("./users.controllers");

const getUsers = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

const getUser = (req, res) => {
  const id = req.params.id;
  const data = getUserById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ id: id, message: "Can't find a user with that ID" });
  }
};

const createNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name && last_name && email && password && birthday) {
    const data = createUser(first_name, last_name, email, password, birthday);
    res.status(201).json(data);
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "examle@examle.com",
        password: "string",
        birthday: "YYYY/MM/DD",
      },
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createNewUser,
};
