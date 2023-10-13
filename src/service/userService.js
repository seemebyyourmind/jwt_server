//bcript and sql
// get the client
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
// get the promise implementation, we will use bluebird
const bluebird = require("bluebird");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const hashUserPass = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};
const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
  });
  let hashPass = hashUserPass(password);

  try {
    // create the connection
    const [rows, fields] = await connection.execute(
      "INSERT INTO users ( username,password,email) VALUES(?,?,?)",
      [username, hashPass, email]
    );
  } catch (err) {
    console.log("checkerr", err);
  }
};
// connection.query(
//   "INSERT INTO user ( username,password,email) VALUES(?,?,?)",
//   [username, hashPass, email],
//   function (err, results, fields) {
//     console.log("results", results); // results contains rows returned by server
//     console.log("field", fields); // fields contains extra meta data about results, if available
//   }
// );

const getUserList = async () => {
  //  connection.query(
  //   "SELECT * FROM user ",
  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //       return users;
  //     }
  //     users = results;
  //     return users;

  //   }
  // );
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "jwt",
    });
    const [rows, fields] = await connection.execute("SELECT * FROM `users`  ");

    return rows;
  } catch (err) {
    console.log("checkerr", err);
  }
};
const deleteUser = async (id) => {
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "jwt",
    });
    const [rows, fields] = await connection.execute(
      "Delete FROM `users` WHERE id=? ",
      [id]
    );

    return rows;
  } catch (err) {
    console.log("checker", err);
  }
};

const getUser = async (id) => {
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "jwt",
    });
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `users` WHERE id=? ",
      [id]
    );

    return rows;
  } catch (err) {
    console.log("checker", err);
  }
};

const updateUserInfo = async (username, email, id) => {
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "jwt",
    });
    const [rows, fields] = await connection.execute(
      "UPDATE users set username=?,email=? WHERE id=? ",
      [username, email, id]
    );

    return rows;
  } catch (err) {
    console.log("checker", err);
  }
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUser,
  updateUserInfo,
};
