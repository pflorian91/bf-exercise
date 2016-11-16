var TodoModel = require('../../models/todo');

module.exports = function deleteOne(req, res) {

    TodoModel.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        TodoModel.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });

};
