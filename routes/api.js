var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

router.get('/api/', function (req, res, next) {
    Wallpaper.find((error, result) => {
        if (error) throw error
        else {
            res.setHeader('Content-Type', 'application/json');
            res.json(result)
        }
    })
});

// get anime wallpapers
router.get('/api/anime', function (req, res, next) {
    Wallpaper.find({wallpaperKind:"Anime"}, (error, result) => {
        if (error) throw error
        else {
            res.setHeader('Content-Type', 'application/json');
            res.json(result)
        }
    })
});



// get nature wallpapers
router.get('/api/nature', function (req, res, next) {
    Wallpaper.find({wallpaperKind:"Nature"}, (error, result) => {
        if (error) throw error
        else {
            res.setHeader('Content-Type', 'application/json');
            res.json(result)
        }
    })
});

// get nature wallpapers
router.get('/api/dota2', function (req, res, next) {
    Wallpaper.find({wallpaperKind:"Dota2"}, (error, result) => {
        if (error) throw error
        else {
            res.setHeader('Content-Type', 'application/json');
            res.json(result)
        }
    })
});


module.exports = router;
