var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TodoSchema = new Schema({
        text: String
    });

module.exports = mongoose.model('Todo', TodoSchema);
