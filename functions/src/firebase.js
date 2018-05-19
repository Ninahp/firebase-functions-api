const admin = require("firebase-admin");
const serviceAccount = require("./inspiring-quotes-17dd9-firebase-adminsdk-srd0a-35f493b931.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    ///databaseURL: "https://inspiring-quotes-17dd9.firebaseio.com"
});

const db = admin.firestore();

writeQuotes()

getData("sampleData");

function fetchQuotes() {
    console.log(result.body);

    const obj = JSON.parse(result.body);
    const quoteData = {
        quote: obj.quote,
        author: obj.author
    }
    return db.collection('sampleData').doc('inspiration').set(quoteData).then(() => {
        console.log('new quote written to the Firestore database');
        return "New quote written to the Firestore database";
    });
}

function writeQuotes() {
    var docRef = db.collection('users').doc('alovelace');

    var setAda = docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });


    var aTuringRef = db.collection('users').doc('aturing');

    var setAlan = aTuringRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    });

}

function getData(collectionID) {
    db.collection(collectionID).get()
        .then((snapshot) => {
           if(snapshot){
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
            return snapshot;
           }
           else{
               console.warn("No data: The collection was empty");
               return null;
           }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

}