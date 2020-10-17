const express = require('express');
const router = express.Router();

router.use(require('./noteRoutes.js'));

module.exports = router;