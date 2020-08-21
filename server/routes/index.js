const express = require("express");
const postController = require("../controller/post");
const upload = require("../middleware/multer").upload;

const router = express.Router();

router.post("/writing", upload.single("img"), postController.writing);
router.post("/upload", postController.upload);
router.post("/like", postController.like);

module.exports = router;
