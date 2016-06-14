/**
 * Created by Brekkishhh on 14-06-2016.
 */

var app = require('express');
var routes = app.Router();

routes.post('/',function (req,res,next) {

    var postEmail = req.body.emailInput;
    var postPassword = req.body.passwordInput;
    if (postEmail!=null && postPassword!=null && postEmail!='' && postPassword!=''){
        res.render('login',{email:postEmail,pass:postPassword});
    }

    else {
        res.redirect('/');
    }

});

module.exports = routes;
