import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();
console.log(process.env);

const app = express();
configViewEngine(app);
initWebRoutes(app);
app.listen(3000, () => {
  console.log("hoangpghammtp");
});
