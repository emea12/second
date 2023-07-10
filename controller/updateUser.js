const User = require("../models/user");

exports.updateUser = async (req, res) => {
  const { userID } = req.params;
  const { name, email, gender, age, id } = req.body;

  const user =  await User.findById(userID, {
    runValidators: true,
    new: true,
  });
  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
 await user.save();
 
 res.send(user)

  // if (name || email || age || gender || id) {
  //   const updatedUser = {
  //     name: name || user.name,
  //     email: email || user.email,
  //     age: age || user.age,
  //     gender: gender || user.gender,
  //     id: id || user.id,
  //   };

  //   let users = usersDB.filter((u) => u.id !== user.id);

  //   users = [...users, updatedUser];

  //   SetDB(users);
  //   res.send(updatedUser);
  // }

  //   res.send("update user");
  // console.log(req.body);
};
//  put update all
// patch update one
