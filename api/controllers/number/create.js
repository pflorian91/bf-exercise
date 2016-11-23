/**
 * create created on 11/23/16 6:53 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

var NumberModel = require('../../models/number');

module.exports = function create(req, res) {

    NumberModel
        .create({
            number: req.body.number,
            done: false
        }, function (err, number) {
            if (err)
                res.send(err);

            NumberModel.find(function(err, numbers) {
                if (err)
                    res.send(err)
                res.json(numbers);
            });

        });

};
