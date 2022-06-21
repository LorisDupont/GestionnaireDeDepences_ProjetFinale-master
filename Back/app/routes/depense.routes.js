module.exports = app => {
    const depenses = require("../controllers/depense.controller");
    var router = require("express").Router();
    // Create a new Depense
    router.post("/", depenses.create);
    // Retrieve all depenses
    router.get("/", depenses.findAll);
    // Retrieve a single Depense with id
    router.get("/:id", depenses.findOne);
    // Update a Depense with id
    router.put("/:id", depenses.update);
    // Delete a Depense with id
    router.delete("/:id", depenses.delete);
    // Delete all depenses
    router.delete("/", depenses.deleteAll);
    app.use('/api/depenses', router);
  };