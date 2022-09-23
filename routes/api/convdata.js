const express =require('express')
const router =express.Router();
const convDataController =require("../../controllers/convDataController");



router.post("/",convDataController.handleConvData);

module.exports =router;