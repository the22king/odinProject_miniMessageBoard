const {Router} = require("express");
const {getForm, addMessage} = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", getForm)
newRouter.post("/", addMessage)



module.exports = newRouter;