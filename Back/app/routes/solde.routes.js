module.exports = app => {
    const soldes = require("../controllers/solde.controller");
    var router = require("express").Router();
    // Create a new solde
    router.post("/", soldes.create);
    // Retrieve all soldes
    router.get("/", soldes.findAll);
    // Retrieve a single solde with id
    router.get("/:id", soldes.findOne);
    // Update a solde with id
    router.put("/:id", soldes.update);
    // Delete a solde with id
    router.delete("/:id", soldes.delete);
    // Delete all soldes
    router.delete("/", soldes.deleteAll);
    app.use('/api/soldes', router);
  };