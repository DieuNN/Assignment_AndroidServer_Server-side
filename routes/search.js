var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

/* GET home page. */
router.get('/anime', function (req, res, next) {
    let data;
    Wallpaper.find({wallpaperKind: 'Anime'}, async (err, result) => {
        if (err) {
            res.render('404')
            throw err
        } else {
            data = Array.from(result)
            console.log(data)
            res.render('anime', {data: data})
        }
    })

});

module.exports = router;
