var app_fireBase = {};
(function() {
    // console.log("hello firebase");

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyDrQo0iBlr_bX42jSzambyy1uPEyzesn-c",
        authDomain: "cookbook-e138e.firebaseapp.com",
        databaseURL: "https://cookbook-e138e-default-rtdb.firebaseio.com",
        projectId: "cookbook-e138e",
        storageBucket: "cookbook-e138e.appspot.com",
        messagingSenderId: "834194352942",
        appId: "1:834194352942:web:ee58e2cd76e4550c8168bf",
        measurementId: "G-WJKYWZGEZ4"
    };
    firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;
})()