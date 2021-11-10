const express = require('express');

const router = express.Router();

// CONTROLLERS
const {
  getByParam,
  getById,
  test,
} = require('../controllers/search.controllers');

router.get('/search', getByParam);
router.get('/detail/:id', getById);
router.get('/test', test);

module.exports = router;
