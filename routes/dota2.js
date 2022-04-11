var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

/* GET home page. */
router.get('/dota2', function (req, res, next) {
    Wallpaper.find({wallpaperKind: 'Dota2'}, async (error, result) => {
        if (error) throw error
        else{
            res.render('dota2', {data: Array.from(result)})
        }
    })
});

module.exports = router;
