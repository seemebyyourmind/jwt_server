const mysql = require("mysql2");
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleCreateUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  connection.query(
    "INSERT INTO user ( username,password,email) VALUES(?,?,?)",
    [username, password, email],
    function (err, results, fields) {
      console.log("results", results); // results contains rows returned by server
      console.log("field", fields); // fields contains extra meta data about results, if available
    }
  );
  return res.send("hoangpham");
};
module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateUser,
};
