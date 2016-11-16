var argv = require('minimist')(process.argv.slice(2));

module.exports = {
    secret: 'adkjashfdaiusdfhas',
    db: {
        /**
         * Returns the database configuration string
         *
         * @returns {String}
         */
        getDetails: function () {
            if (argv.environment === 'VAGRANT') {
                return 'mongodb://192.168.68.2:27017/bf-exercise';
            } else {
                return 'mongodb://localhost:27017/bf-exercise';
            }
        }
    }
};
