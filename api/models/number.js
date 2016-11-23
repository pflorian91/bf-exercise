/**
 * number created on 11/23/16 6:57 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    NumberSchema = new Schema({
        number: Number,
        userCode: String
    });

module.exports = mongoose.model('Number', NumberSchema);
