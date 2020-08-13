const express = require("express");
const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const http = require("http");
const server = http.createServer(app);

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.use(express.urlencoded({ extended: false }));
app.post('/process_form', function (req, res) {
    // Prepare output in JSON format
    console.log('Got body:', req.body);
})

var serve_app = app.listen(port, function () {
    var host = process.env.HOST  || "http://127.0.0.1";
    var port = serve_app.address().port

    console.log("Example app listening at %s:%s", host, port)
})

