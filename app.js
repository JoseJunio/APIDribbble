var express = require("express");
var cors = require('cors');
var app = express();

const port = 3000;

app.use(cors());

app.use(function(req, res,next) {
    console.log('teste');
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": '*',//req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headersn
     */
    res.header("Access-Control-Allow-Credentials", true);//responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  "http://localhost:3000");//responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", "ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset");//(req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET");//(req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);
    res.header("Access-Control-Max-Age", 86400);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});


app.use(express.static('app'));

//app.get('/', cors());

/*app.use(function (req, res, next) {
    console.log('teste')
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Accept, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    return next();
});*/

app.listen(port, function(){
    console.log('Servidor está connectado na porta 3000.');
});