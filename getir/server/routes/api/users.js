const express = require("express");
const router = express.Router();

const controller = require("../../controllers/getirController");

router.post("/", (request, response) => {
  const parameters = request.body;
  controller
    .addGetir(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});
router.get("/", (request, response) => {
  const parameters = request.body;
  controller
    .getAllGetir(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});
router.get("/id", (request, response) => {
  const parameter = request.body;
  controller
    .getGetirById(parameter)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});
router.delete("/", (request, response) => {
  const parameters = request.body;
  controller
    .deleteGetirById(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});


module.exports = router;
