const firebaseAdmin = require("firebase-admin");
const firebaseFunctions = require('firebase-functions');

const firebaseApp = firebaseAdmin.initializeApp(firebaseFunctions.config().firebaseAdmin);

const db = firebaseAdmin.firestore();

module.exports = {
    getFacts(dataRef) {
        const ref = firebaseApp.database().ref(datRef);
        return ref.once('value').then(snapshot => snapshot.value)
    },

    getData(collectionID) {
        db.collection(collectionID).get()
            .then((snapshot) => {
                if (snapshot) {
                    snapshot.forEach((doc) => {
                        console.log(doc.id, '=>', doc.data());
                    });
                    return snapshot;
                } else {
                    console.warn("No data: The collection was empty");
                    return null;
                }
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
}