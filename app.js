var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
const animeRouter = require('./routes/anime')
const natureRouter = require('./routes/nature')
const dota2Router = require('./routes/dota2')
const listRouter = require('./routes/list')
const editRouter = require('./routes/edit')
const detailRoute = require('./routes/detail')
const deleteRoute = require('./routes/delete')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(animeRouter)
app.use(natureRouter)
app.use(dota2Router)
app.use(listRouter)
app.use(editRouter)
app.use(detailRoute)
app.use(deleteRoute)


mongoose.connect('mongodb+srv://dieunn:nongngocdieu@cluster1.fkfat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', error => {
    if (error) throw error;
    console.log("Connected")
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
