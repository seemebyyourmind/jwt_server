import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
import connection from "./config/configDB";
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);
app.listen(process.env.PORT, () => {
  console.log("hoangpghammtp");
});
