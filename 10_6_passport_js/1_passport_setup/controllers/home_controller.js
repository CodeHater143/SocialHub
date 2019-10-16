module.exports.home = function(req,res){

    //print cookies in console
    //console.log(req.cookies);

    //modify cookie
    //res.cookie('user_id',26);
    return res.render('home',{
        title:"Home"
    });
}