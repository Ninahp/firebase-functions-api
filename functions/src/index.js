const express = require("express");
const engines = require('consolidate');
const dataApp = require("./data.js");

const firebaseApp = firebaseAdmin.initializeApp(firebaseFunctions.config().firebaseAdmin);

const app = express();
const db = admin.firestore();
app.engine('hbs', engines.handlebars)
app.set('views', './views');
app.set('view engine', 'hbs');


app.get("/", (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    dataApp.getFacts('facts').then(facts => {
        response.render('index', {facts});
    });
    response.send('index', {
        facts
    });
});

app.get("/facts", (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    dataApp.getData("facts").then(facts => {
        response.json(facts);
    });
    response.send('error');
});

exports.app = functions.https.onRequest(app);