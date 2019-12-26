const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("/", function(req, res) {
  Rental.find({}, function(err, results) {
    res.json(results);
  });
});

router.get("/:id", function(req, res) {
  const rentalId = req.params.id;
  Rental.findById(rentalId, function(err, result) {
    if (err) {
      return res.status(400).send({
        errors: [{ title: "Rental Errror!", detail: "could not find rental" }]
      });
    }
    res.json(result);
  });
});

module.exports = router;
