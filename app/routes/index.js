const router = require('express').Router();
const shares = require('./shares.routes');
const login = require('./login.routes');

router.use('/shares', shares);
router.use('/login', login);

module.exports = router;
