const router = require('express').Router();
const sharesController = new (require('../controllers/shares.controller'))();

router.get('/:symbol', sharesController.get);

module.exports = router;
