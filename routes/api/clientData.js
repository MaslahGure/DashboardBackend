const express = require('express');
const router = express.Router();
const clientDataController = require('../../controllers/client/clientDataController');



router.route('/').post(clientDataController.handleClientData);

module.exports = router;