const uuid = require("uuid");
let users = require("../Users");


exports.getall = (req, res) => {
    res.json(users);
}

exports.getUserById = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((users) => users.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
  
    // Validate that name and email are provided
    if (!name || !email) {
      return res.status(400).json({ msg: "Please provide both name and email" });
    }
  
    // Check if the email already exists in the users array
    const emailExists = users.some((user) => user.email === email);
  
    if (emailExists) {
      return res.status(400).json({ msg: "User with this email already exists" });
    }
  
    // Create a new user object
    const newUser = {
      id: uuid.v4(),
      name: name,
      email: email,
    };
  
    // Add the new user to the users array
    users.push(newUser);
  
    // Return the updated users array as a response
    res.status(201).json(users);
};

exports.modifyUser = (req, res) => {
const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
      const updatedUser = req.body;
      users.forEach((user) => {
        if (user.id === parseInt(req.params.id)) {
          user.name = updatedUser.name ? updatedUser.name : user.name;
          user.email = updatedUser.email ? updatedUser.email : user.email;
        }
      });
      res.json({ msg: "userUpdated", user: updatedUser });
      res.json(users);
    } else {
      res.sendStatus(400);
    }
};

exports.deleteUser = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
      res.json(users.filter((users) => users.id !== parseInt(req.params.id)));
      res.json({ msg: "userDeleted", users });
    } else {
      res.sendStatus(400);
    }
};