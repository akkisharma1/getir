const express = require("express");
const CrudRoute = require("./users");


const router = express.Router();

router.use("/users", CrudRoute);
module.exports = router;
