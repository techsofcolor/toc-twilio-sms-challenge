const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const port = process.env.PORT || 8080;

const http = require("http");
const server = http.createServer(app);

app.use(bodyParser.json());

app.use(express.static("public"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// app.use(express.urlencoded({ extended: false }));

app.post("/process_form", function (req, res) {
  // Prepare output in JSON format
  phone_number = req.body.phone_number;
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone_number,
      body: "You just sent an SMS from Node.js using Twilio!",
    })
    .then((message) => console.log(message.sid));
  res.sendStatus(200);
});

var serve_app = app.listen(port, function () {
  var host = process.env.HOST || "http://127.0.0.1";
  var port = serve_app.address().port;

  console.log("Example app listening at %s:%s", host, port);
});
