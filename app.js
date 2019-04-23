var express = require("express");
var cors = require('cors');
var app = express();
const port = 3000;

app.use(cors());

app.use(express.static('app'));

app.listen(port, function(){
    console.log('Servidor está connectado na porta 3000.');
});
