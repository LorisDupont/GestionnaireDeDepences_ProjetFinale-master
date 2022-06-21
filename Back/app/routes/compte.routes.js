module.exports = app => {
    const comptes = require("../controllers/compte.controller");
    var router = require("express").Router();
    // Create a new compte
    router.post("/", comptes.create);
    // Retrieve all comptes
    router.get("/", comptes.findAll);
    // Retrieve a single compte with id
    router.get("/:id", comptes.findOne);
    // Update a compte with id
    router.put("/:id", comptes.update);
    // Delete a compte with id
    router.delete("/:id", comptes.delete);
    // Delete all comptes
    router.delete("/", comptes.deleteAll);
    app.use('/api/comptes', router);
  };