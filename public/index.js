var styleState = true;
const recipeList = document.getElementById('list1')

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'style2.css' : 'style1.css'
    styleState = !styleState;
}

function addRecipe() {
    const newRecipe = document.createElement('div');
    newRecipe.className = "recipeCard col-xs-12 col-sm-6 col-md-3 text-center";
    /*get form submission later*/
    const content = `
                <div class="card" style="width: 18rem;">
                    <img src="imgs/recipe1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn card-button text-white">Go somewhere</a>
                    </div>
                </div>
    `
    newRecipe.innerHTML = content;
    recipeList.appendChild(newRecipe);
}

function deleteRecipe(parent) {
    const p = parent.parentElement;
    p.remove();
}


var mainApp = {};

(function() {
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
        } else {
            //redirect to login page
            uid = null;
            window.location.replace("login.html");
        }
    });

    function logOut() {
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})()