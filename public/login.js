var app_fireBase = {};
(async function() {
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
    await firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'index.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],

    };
    ui.start('#firebaseui-auth-container', uiConfig);

})()

var styleState = false;

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'login1.css' : 'login2.css'
    styleState = !styleState;
}