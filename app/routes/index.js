const router = require('express').Router();
const shares = require('./shares.routes');

router.use('/shares', shares);

module.exports = router;
