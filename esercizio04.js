const express = require('express');
const {request, response} = require("express");
const  application = express();
const colors = require("./colors.json");
const path = require("path");

/*
 * MIDDLEWARE: logic which is registered on request event or on next call;
 * Are execute based on the order in which they are defined.
 */

application.use(express.urlencoded( { extended: true })); // middleware that process body
application.use(express.static('public'));

application.use('/hello', (request, response, next) => {
    response.send("<h1>Hello Express</h1>");
    // next(); go to next middleware
});

application.get('/colors', (request, response) => {
    // response.setHeader("Content-type", "application/json");
    // response.send(JSON.stringify(colors))
    response.json(colors);
});

application.get('/contacts', (request, response) => {
    response.sendFile(path.join(__dirname, "www", "contacts.html"));
});

application.get('/sayhello/:name', (request, response) => {
   response.send("Hello, " + request.params.name + "!");
});

application.get("/", (request, response) => {
    response.send("<h1>Hello World! with GET</h1>");
});

application.use((request, response) => {
   response.status(404).send("<h1>Uaglio Statt'accort</h1>")
});


application.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});