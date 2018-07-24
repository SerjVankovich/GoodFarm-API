var express = require("express");
var router = express.Router();
const userController = require("../controllers/users");

/* GET users listing. */
router.get("/", userController.getAllUsers);
router.post("/newUser", userController.createNewUser);
router.put("/updateUser/:userid", userController.updateUser);
router.delete('/deleteUser/:userid', userController.deleteUser);
router.delete('/:userid/deleteOrder/:orderid',  userController.deleteOrder)


module.exports = router;
