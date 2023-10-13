import express from "express";
import homeControler from "../controler/homeControler";

const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", homeControler.handleHelloWord);
  router.get("/user", homeControler.handleUserPage);
  router.post("/user/create-user", homeControler.handleCreateUser);
  router.post("/delete/:id", homeControler.handleDeleteUser);
  router.get("/update", homeControler.getUpdateUser);
  router.post("/update-user", homeControler.handleUpdateUser);
  return app.use("/", router);
};
export default initWebRoutes;
