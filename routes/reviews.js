const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/locations/:id/reviews', isLoggedIn, reviewsCtrl.create);
// router.delete("/:id", isLoggedIn, reviewsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;