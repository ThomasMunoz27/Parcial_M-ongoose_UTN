const express = require("express")
const router = express.Router()
const authorController = require("../controllers/authorController")

router.get("/", authorController.getAllAuthors)

router.get("/:id", authorController.getAuthorById)

router.post("/", authorController.postAuthor)

router.put("/:id", authorController.putAuthor)

router.delete("/:id", authorController.deleteAuthor)

router.put("/:id/addBook/:bookId", authorController.addBookToAuthor)

module.exports = router