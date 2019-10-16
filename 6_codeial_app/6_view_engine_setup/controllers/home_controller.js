module.exports.home = function(req,res){
    //return res.end('<h1>hello express user</h1>');
    return res.render('home',{
        title:"Home"
    });
}