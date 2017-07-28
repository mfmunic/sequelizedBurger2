var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/index", function(req, res) {
  burger.findAll({}).then(function(results) {
      var burgers = []
      for (var i=0; i<results.length;i++){
        burgers.push(results[i].dataValues)
      }
      console.log(burgers)
      res.render("index", {"burger": burgers});
    });
});

router.post("/", function(req, res) {
	console.log(req.body.name)
  burger.create({burger_name: req.body.name})
  .then(function(resulting){
    res.redirect("/index")
  })
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

	burger.update({devoured: 1},{where:{id:req.params.id}})
  .then(function(resulting){
    res.redirect("/index")
  })
});

module.exports = router;