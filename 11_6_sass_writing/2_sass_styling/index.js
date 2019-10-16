const express = require('express'); //express library is required to build app
const cookieParser = require('cookie-parser');
const app = express(); //how to mount express on app variable
const expressLayouts = require('express-ejs-layouts'); //how to include  express layouts

const port = 8000;

//conection is already establised inside config folder
const db = require('./config/mongoose'); //acuired connection of database from config folder

//how to used session-cookie and authnetication
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//how to use mogostore to store
const MongoStore = require('connect-mongo')(session);

//sass middleware
const sassMiddleware = require('node-sass-middleware');

//how to tell app to use use sass
app.use(sassMiddleware(
    {
        src: './assets/scss',
        dest: './assets/css',
        debug: true,
        outputStyle: 'expanded',
        prefix: '/css'
    }
));

//how to tell app to use body-parser
app.use(express.urlencoded());

//how to tell app to use cookie-parser
app.use(cookieParser());

//how to tell app to use assets folder
app.use(express.static('./assets'));

//how to tell app to use express-ejs-layouts
app.use(expressLayouts);

//how to tell app to extract styles and script from sub pages into layout page
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//how to tell app to use view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//mongo store is used to store in session cookie in db
app.use(session({
    name: 'codeial',
    secret: "somethingblah",    //todo secret change at the time of production
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err)
        {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);

//how to tell app to use express router 
app.use('/',require('./routes/index'))  //it is a middleware 

//establisement of server
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server:${err}`); //error in running the server
    }
    console.log(`yup! express server is running on port:${port}`); //server is running successfuly 
});