const router = require('express').Router();
const controller = require('../controllers/shares.controller');
const middleware = require('../middlewares/auth.middleware');

router.get('/:symbol', middleware.verify, controller.get);

module.exports = router;
