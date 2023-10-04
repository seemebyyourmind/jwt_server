import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple query

app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);
app.listen(process.env.PORT, () => {
  console.log("hoangpghammtp");
});
