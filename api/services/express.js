/**
 * Created by p.florian91 on 11/2/15.
 */

var express          = require('express'),
    bodyParser       = require('body-parser'),
    expressValidator = require('express-validator'),
    routes           = require('../routes/index'),
    app              = express(),
    ExpressService   = {
        /**
         *
         * @returns {*}
         */
        createServer: function () {
            return app;
        }
    },
    passport         = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true  // false
}));
app.use(expressValidator());

app.use(passport.initialize());

require('../config/passport')(passport);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods:", "GET, POST, DELETE");
    next();
});

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    console.log('Development');
    app.use(function (err, req, res, next) {
        var status = err.status || 500;
        res.status(status).json({
            message: err.message,
            error:   err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    var status = err.status || 500;
    res.json({
        message: err.message
    }, status);
});


app.set('port', process.env.PORT || 8007);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = ExpressService;
