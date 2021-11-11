const express = require('express');

const router = express.Router();

// CONTROLLERS
const {
  getByParam,
  getById,
  getSearchLogs,
  anagram,
  findFirstStringInBracket,
} = require('../controllers/search.controllers');

router.get('/search', getByParam);
router.get('/detail/:id', getById);
router.get('/search-logs', getSearchLogs);
router.get('/find-first-string', findFirstStringInBracket);

router.get('/anagram', anagram);
module.exports = router;
