var express = require("express");
var router = express.Router();
var courseController = require("../controllers/courseController");

router.get("/", courseController.course_index);
router.get("/create", courseController.course_create_get);
router.post("/create", courseController.course_create_post);

router.get("create/update/:id");
router.post("create/update/:id");

router.delete("/:id");

module.exports = router;
