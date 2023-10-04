import express from "express";
import homeControler from "../controler/homeControler";

const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", homeControler.handleHelloWord);
  router.get("/userpage", homeControler.handleUserPage);
  router.post("/user/create-user", homeControler.handleCreateUser);
  return app.use("/", router);
};
export default initWebRoutes;
