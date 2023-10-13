import userService from "../service/userService";

const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
};
const handleCreateUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  //hash password
  userService.createNewUser(email, password, username);

  return res.redirect("/user");
};
const handleDeleteUser = (req, res) => {
  console.log(req.params.id);
  userService.deleteUser(req.params.id);
  return res.redirect("/user");
};
const getUpdateUser = async (req, res) => {
  const [userInfo] = await userService.getUser(req.query.id);
  console.log(req.query.id);
  return res.render("user-update.ejs", { userInfo });
};
const handleUpdateUser = async (req, res) => {
  let username = req.body.username;
  let id = req.body.id;
  let email = req.body.email;
  userService.updateUserInfo(username, email, id);
  return res.redirect("/user");
};
module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateUser,
  handleDeleteUser,
  getUpdateUser,
  handleUpdateUser,
};
