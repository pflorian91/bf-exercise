var TodoModel = require('../../models/todo');

module.exports = function getAll(req, res) {
    TodoModel.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};
