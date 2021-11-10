const express = require('express');

const router = express.Router();

// CONTROLLERS
const { getByParam, getById } = require('../controllers/search.controllers');

router.get('/search', getByParam);
router.get('/detail/:id', getById);

module.exports = router;
