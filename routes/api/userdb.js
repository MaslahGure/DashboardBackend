const express = require('express');
const router = express.Router();
const userdbController = require('../../controllers/userdbController');



router.route('/').put(userdbController.handleUpdateUserDatabase);

module.exports = router;