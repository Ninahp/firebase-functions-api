const express = require("express");
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./configs/inspiring-quotes-17dd9-firebase-adminsdk-srd0a-35f493b931.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    ///databaseURL: "https://inspiring-quotes-17dd9.firebaseio.com"
});

const app = express();
const db = admin.firestore();

app.get("/timestamp", (request, response) => {
    var now = `${Date.now()}`;
    console.log(now);

    response.send(now);
});

exports.app = functions.https.onRequest(app);

exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      return res.redirect(303, snapshot.ref.toString());
    });
  });