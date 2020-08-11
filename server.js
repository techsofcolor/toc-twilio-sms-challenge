const express = require("express");
const app = express();
var bodyParser = require('body-parser');

const client = require('twilio')(
    // process.env.TWILIO_ACCOUNT_SID,
    // process.env.TWILIO_AUTH_TOKEN
    "AC137e1ef9107a509981cad839ff8dc717",
    "a582f5a86e2371c81171ef801db191f8"
);
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
    res.sendStatus(200);
    phone_number = req.body.phone_number
    //res.end(JSON.stringify(response));
    client.messages.create({
    // from: process.env.TWILIO_PHONE_NUMBER,
    // to: process.env.CELL_PHONE_NUMBER,
    from: 19388888249,
    to:phone_number,
    body: "You just sent an SMS from Node.js using Twilio!"
}).then((messsage) => console.log(message.sid));
})

var serve_app = app.listen(port, function () {
    var host = process.env.HOST  || "http://127.0.0.1";
    var port = serve_app.address().port

    console.log("Example app listening at %s:%s", host, port)
})

