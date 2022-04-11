var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')
const e = require("express");
const {log} = require("debug");

/* GET users listing. */
router.get('/edit/:id', function (req, res, next) {
    return Wallpaper.findById(req.params.id, async (err, result) => {
        if (err) throw err;
        else {
            return res.render("edit", {data: result})
        }
    })
});


router.post('/edit/:id', (req, res) => {
    const wallpaperName = req.body.wallpaperName
    const wallpaperDescription = req.body.wallpaperDescription
    const wallpaperLink = req.body.wallpaperLink
    const updateTime = new Date()
    const wallpaperKind = req.body.wallpaperKind

    console.log(req.params.id)


    Wallpaper.findOneAndUpdate({_id: req.params.id}, {
        wallpaperName: wallpaperName,
        wallpaperDescription: wallpaperDescription,
        updateTime: updateTime,
        wallpaperLink: wallpaperLink,
        wallpaperKind: wallpaperKind
    }, {new: false}, err => {
        if (!err) {
            Wallpaper.find((error, result) => {
                res.render("list", {
                    message: "Cập nhật thành công! Thay đổi có thể mất một lúc để xuất hiện!",
                    data: Array.from(result),
                })
            })
        }
    })


})

module.exports = router;
