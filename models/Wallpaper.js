const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wallpaper = new Schema({
    wallpaperName:String,
    wallpaperDescription:String,
    updateTime:Date,
    wallpaperLink:String,
    wallpaperKind:String
})

module.exports = mongoose.model('Wallpaper', Wallpaper)