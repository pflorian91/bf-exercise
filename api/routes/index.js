var express  = require('express'),
    router   = express.Router(),
    ctrl     = require('../controllers'),
    passport = require('passport');

router
    // protected routes
    .get('/api/todos', passport.authenticate('jwt', {session: false}), ctrl.todo.getAll)
    .post('/api/todos', passport.authenticate('jwt', {session: false}), ctrl.todo.create)
    .delete('/api/todos/:todo_id', passport.authenticate('jwt', {session: false}), ctrl.todo.delete)

    // open routes
    .post('/api/signup', ctrl.user.signup)
    .post('/api/authenticate', ctrl.user.authenticate);

module.exports = router;
