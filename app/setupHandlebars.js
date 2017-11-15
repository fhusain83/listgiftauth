var ehandlebars = require('express-handlebars')
var express=require('express');
module.exports = function(app) {
app.engine('hbs', ehandlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
}