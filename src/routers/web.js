import express from "express";
import homeControler from "../controler/homeControler";
import { handleUserPage } from "../controler/userControler";
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", homeControler.handleHelloWord);
  router.get("/userpage", homeControler.handleUserPage);
  return app.use("/", router);
};
export default initWebRoutes;
