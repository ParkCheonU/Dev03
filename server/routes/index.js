const express = require("express");
const postController = require("../controller/post");
const multer = require("../middleware/multer");

const router = express.Router();

router.post("/writing", multer.single("img"), postController.writing);
router.get("/upload", postController.upload);
router.post("/like", postController.like); 