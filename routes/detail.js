var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')


router.get('/detail/:id', function (req, res, next) {
    Wallpaper.findById(req.params.id, async (err, result) => {
        if (err) throw err;
        else {
            res.render("detail", {data:result})
        }
    })
});

module.exports = router;
