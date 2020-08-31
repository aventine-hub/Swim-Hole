const Location = require('../models/location');

module.exports = {
    create,
    // delete: delReview,
};

function create(req, res) {
    Location.findById(req.params.id, function (err, location) {
        location.reviews.push(req.body);
        location.save(function (err) {
            res.redirect(`/locations/${location._id}`);
        });
    });
}

// function delReview(req, res, next) {
//     Location.findOne({ 'reviews._id': req.params.id }, function (err, location) {
//         location.reviews.id(req.params.id).remove();
//         location.save(function (err) {
//             res.redirect(`/locations/${location._id}`);
//         });
//     });
// }