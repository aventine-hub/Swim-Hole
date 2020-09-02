const Location = require('../models/location');

module.exports = {
    create,
};

function create(req, res) {
    Location.findById(req.params.id, function (err, location) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        location.reviews.push(req.body);
        location.save(function (err) {
            res.redirect(`/locations/${location._id}`);
        });
    });
}

