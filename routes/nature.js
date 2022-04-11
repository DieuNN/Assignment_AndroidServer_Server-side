var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

/* GET home page. */
router.get('/nature', function (req, res, next) {
    Wallpaper.find({wallpaperKind: 'Nature'}, async (error, result) => {
        if (error) throw error
        else{
            res.render('nature', {data: Array.from(result)})
        }
    })
});

module.exports = router;
