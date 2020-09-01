var express = require("express");
var router = express.Router();
const locationsController = require('../controllers/locations')


router.get("/", locationsController.index);
router.get("/new", isLoggedIn, locationsController.new);
router.get("/:id", locationsController.show);
router.get("/:id/on-map", locationsController.showOnMap)
router.post("/", isLoggedIn, locationsController.create);
router.delete("/:id", isLoggedIn, locationsController.delete);
router.get('/:id/edit', isLoggedIn, locationsController.edit);
router.put('/:id', isLoggedIn, locationsController.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;