var express  = require('express'),
    router   = express.Router(),
    ctrl     = require('../controllers'),
    passport = require('passport');

router
    .post('/api/number', ctrl.number.create);

module.exports = router;
