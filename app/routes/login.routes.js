const router = require('express').Router();
const controller = require('../controllers/login.controller');

router.post('/create', controller.create);

module.exports = router;
