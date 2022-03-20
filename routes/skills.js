var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

// Require controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// All actual paths start with '/skills'

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new; Get /posts/new adds onto a view, POST /posts creates a new post
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST; create route to add new data
router.post('/', skillsCtrl.create);
// Post to delete
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
