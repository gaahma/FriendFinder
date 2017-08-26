// Dependencies
// =============================================================
var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    htmlRoutes = require("./routing/htmlRoutes.js"),
    apiRoutes = require("./routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express(),
    PORT = process.env.PORT ||  3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});