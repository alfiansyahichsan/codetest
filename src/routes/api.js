const express = require('express');

const router = express.Router();

// CONTROLLERS
const { findAll } = require('../controllers/test');

router.get('/test', findAll);

module.exports = router;
