// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;

//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!


/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/
var fs = require('fs');

var csvConverter=new Converter({constructResult:false, toArrayString:true});

fs.createReadStream('world_data.csv')
  .pipe(csvConverter)
  .pipe(fs.createWriteStream('data.json'));
/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/

//GET
app.get('/items', function (req, res){
	fs.readFile("data.json", 'utf8', function (err, data) {
		console.log(data);
		res.end (data);
	});
})

app.get('/items/:id', function (req, res){
	fs.readFile("data.json", 'utf8', function (err, data) {
	   
	});
})

//POST

//DELETE


// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});