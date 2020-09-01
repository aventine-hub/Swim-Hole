const Location = require("../models/location")

module.exports = {
    index,
    new: newLocation,
    create,
    show,
    delete: deleteLocation,
    showOnMap,
    edit,
    update
}

function index(req, res) {
    Location.find({}, function (err, locations) {
        res.render("locations/index", { locations });
    })
}


function newLocation(req, res) {
    res.render("locations/new")
}

function create(req, res) {
    let location = new Location(req.body);
    location.userId = req.user._id;
    location.save(function (err) {
        if (err) {
            return res.render("locations/new");
        }
        res.redirect("/locations");
    });
}

function show(req, res) {
    Location.findById(req.params.id, function (err, location) {
        if (err) {
            res.redirect('/locations')
        }
        res.render("locations/show", { location })
    })
}

function deleteLocation(req, res) {
    Location.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return;
        res.redirect("/locations");
    });
}

function showOnMap(req, res) {
    Location.find({}, function (err, locations) {
        Location.findById(req.params.id, function (err, locationForMap) {
            res.render("locations/onMap", { locations, locationForMap });
        });
    })
}

function edit(req, res) {
    Location.findById(req.params.id, function (err, location) {
        if (err) {
            res.redirect(`/locations`)
        }
        res.render('locations/edit', { location, title: 'Edit Location' })
    })
}

function update(req, res) {
    Location.findByIdAndUpdate(req.params.id, req.body, function (err, location) {
        if (err) {
            res.render('locations/edit', { location, title: 'Edit Location' })
        }
        res.redirect(`/locations`)
    })
}
