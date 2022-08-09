const express = require("express")
const router = express.Router();
//Router() function is used to create a new router object. 

const BookShopsController = require("../controllers/bookshops");

router.get("/", BookShopsController);

module.exports = router;