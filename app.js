"use strict";
var express = require('express'),
    app = express();

app.use(express.static('www'))

app.all('*', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});