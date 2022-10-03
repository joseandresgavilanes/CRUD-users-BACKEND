const router = require("express").Router();

const userServices = require("./users.services");

router.get("/users", userServices.getUsers);
router.post("/users", userServices.createNewUser);
router.get("/users/:id", userServices.getUser);

module.exports = router;
