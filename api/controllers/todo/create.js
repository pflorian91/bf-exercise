var TodoModel = require('../../models/todo');

module.exports = function create(req, res) {

    TodoModel.create({
        text : req.body.text,
        done : false
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
