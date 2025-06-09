sap.ui.define([
  "sap/ui/model/json/JSONModel",
  // "firebase/app",
  // "firebase/firestore",
], function (JSONModel) {
  "use strict";

  return {
    // Firebase-config retrieved from the Firebase-console
    initializeFirebase: function () {
        // Replace with your config here
      const firebaseConfig = {
        apiKey: "AIzaSyBAjwLXJ5l9Gx4H_FHhj8DiS-oJSBpr4jE",
        authDomain: "test-f652f.firebaseapp.com",
        projectId: "test-f652f",
        storageBucket: "test-f652f.firebasestorage.app",
        messagingSenderId: "532096326208",
        appId: "1:532096326208:web:537e21ba2fd618d8665da5",
        measurementId: "G-DF1RXW3V09",
      };
      console.log("Firebase Config: ", firebaseConfig);
      // Initialize Firebase with the Firebase-config
      firebase.initializeApp(firebaseConfig);

      // Create a Firestore reference
      const firestore = firebase.firestore();

      // Create a Authentication reference
      const fireAuth = firebase.auth();

      // Get Firebase Instance
      const oFirestore = firebase.firestore;

      // Create a Fire Storage reference
      const fireStorage = firebase.storage();

      // Create a Fire Functions reference
      const fireFunctions = firebase.app().functions("asia-east2");

      // Firebase services object
      const oFirebase = {
        firestore: firestore,
        fireAuth: fireAuth,
        oFirestore: oFirestore,
        fireStorage: fireStorage,
        fireFunctions: fireFunctions,
      };

      // Create a Firebase model out of the oFirebase service object which contains all required Firebase services
      var fbModel = new JSONModel(oFirebase);

      // Return the Firebase Model
      return fbModel;
    },
  };
});
