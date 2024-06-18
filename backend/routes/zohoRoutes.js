const express = require('express');
const router = express.Router()
const zohoController = require("../controller/zohoController")

router.get('/dashboard',zohoController.getAllInvoices)




module.exports = router