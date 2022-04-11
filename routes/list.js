var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

/* GET home page. */
router.get('/list', function (req, res, next) {
    let data;
    Wallpaper.find(async (err, result) => {
            if (!err) data = Array.from(result)
            res.render("list", {message: "", data: data})
        }
    )

});

router.post('/add', (req, res) => {
    const wallpaperName = req.body.wallpaperName
    const wallpaperDescription = req.body.wallpaperDescription
    const wallpaperLink = req.body.wallpaperLink
    const updateTime = new Date()
    const wallpaperKind = req.body.wallpaperKind

    if (wallpaperKind.length === 0) {
        res.render('list', {message: "Bạn chưa chọn thể loại cho ảnh!"})
        res.end()
    }


    const wallpaper = new Wallpaper({
        wallpaperName: wallpaperName,
        wallpaperDescription: wallpaperDescription,
        updateTime: updateTime,
        wallpaperLink: wallpaperLink,
        wallpaperKind: wallpaperKind
    })

    console.log(wallpaper)

    wallpaper.save(err => {
        console.log(err)
    })
    res.render('list', {message: 'Đóng góp hình ảnh thành công!'})
})

module.exports = router;
