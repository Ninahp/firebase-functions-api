const express = require("express");
const engines = require('engines');
const consolidate = require('consolidate');
const firebaseAdmin = require("firebase-admin");
const firebaseFunctions = require('firebase-functions');
const serviceAccount = require("./configs/inspiring-quotes-firebase-adminsdk.json");

const firebaseApp = firebaseAdmin.initializeApp(firebaseFunctions.config().firebaseAdmin);

const app = express();
const db = admin.firestore();
app.engine('hbs', engines.handlebars)
app.set('views', './views');
app.set('view engine', 'hbs');

function getFacts() {
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snapshot => snapshot.value)
}

app.get("/", (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getFacts.then(facts => {
        response.render('index', {facts});
    });
    response.send('index', {
        facts
    });
});

exports.app = functions.https.onRequest(app);