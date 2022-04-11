var express = require('express');
var router = express.Router();
const Wallpaper = require('../models/Wallpaper')

router.get('/delete', (req, res) => {
    res.render("404")
})

router.post('/delete/:id', (req, res) => {
    Wallpaper.deleteOne({id: req.params.id},  (err) => {
        if (err) throw  err
        else {
            Wallpaper.find((error, result) => {
                if (!err) {
                    res.render("list", {message: "Xoá thành công!", data: Array.from(result)})
                }
            })
        }
    })
})

module.exports = router;
