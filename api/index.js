var ExpressService = require('./services/express.js'),
    app,
    databaseConnection,
    DatabaseService = require('./services/database.js');

databaseConnection = DatabaseService.connect();
app = ExpressService.createServer();

module.exports = app;
