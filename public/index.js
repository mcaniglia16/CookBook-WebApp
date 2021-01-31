var styleState = true;
var i = 0;
var baseCard = document.getElementById('recipeCard');
var firstEntry = true;
var userCustomImg = '';

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'style2.css' : 'style1.css'
    styleState = !styleState;
}

function addRecipe() {



    var recipeName = document.forms["recipe-content"]["recipe-name"].value;
    var ingredients = document.forms["recipe-content"]["ingredients"].value;
    var steps = document.forms["recipe-content"]["steps"].value;
    var cookTime = document.forms["recipe-content"]["cook-time"].value;
    var ovenTemp = document.forms["recipe-content"]["oven-temp"].value;
    
    document.getElementById("cardName0").innerHTML = recipeName;
    
    var incorrectInput = false;
    var nameEntered = false;
    var ingEntered = false;
    var stepsEntered = false;
    var cTimeEntered = false;
    var oTempEntered = false;
    

    if (recipeName == "") {
        document.getElementById("rName").style.borderColor = "red";
        incorrectInput = true;
    } else { nameEntered = true; }


    if (ingredients == "") {
        document.getElementById("ings").style.borderColor = "red";
        incorrectInput = true;
    } else { ingEntered = true; }

    if (steps == "") {
        document.getElementById("ste").style.borderColor = "red";
        incorrectInput = true;
    } else { stepsEntered = true; }

    if (cookTime == "") {
        document.getElementById("cTime").style.borderColor = "red";
        incorrectInput = true;
    } else { cTimeEntered=true; }

    if (ovenTemp == "") {
        document.getElementById("oTemp").style.borderColor = "red";
        incorrectInput = true;
    } else { oTempEntered = true; }

    console.log(incorrectInput);


    if (!incorrectInput) {
        $('#recipePrompt').modal('hide');
        document.getElementById("rName").value = "";
        document.getElementById("ings").value = "";
        document.getElementById("ste").value = "";
        document.getElementById("cTime").value = "";
        document.getElementById("oTemp").value = "";
        document.getElementById("nFacts").value = "";

        if (firstEntry) {
            firstEntry = false
            var hidden = document.getElementById("outerRecipeCard");
            hidden.style.display = "block";
            document.getElementById("cardName").innerHTML = recipeName;
        }
        else {
            var newCard = baseCard.cloneNode(true);
            newCard.id = "new" + ++i;
            newCard.childNodes[1].id = "cardPic" + i;
            newCard.childNodes[3].childNodes[1].id = "cardName" + i;
            newCard.childNodes[3].childNodes[3].id = "cardIngre" + i;
            baseCard.parentNode.appendChild(newCard);
        }
    }
    if(nameEntered){document.getElementById("rName").style.borderColor="black";}
    if(ingEntered){document.getElementById("ings").style.borderColor = "black";}
    if(stepsEntered){document.getElementById("ste").style.borderColor = "black";}
    if(cTimeEntered){document.getElementById("cTime").style.borderColor = "black";}
    if(oTempEntered){document.getElementById("oTemp").style.borderColor = "black";}
   
        
        
}



function deleteRecipe(node) {
    if (i > 0) {
        node.parentElement.parentElement.remove();
    } else {
        firstEntry = true;
        var hidden = document.getElementById("outerRecipeCard");
        hidden.style.display = "None";
    }
}

function getImg(event) {
    var i = document.getElementById('outputImg');
    i.src = URL.createObjectURL(event.target.files[0]);
    userCustomImg = i.src;
}

async function searchRecipe(searchId, resultId) {
    const userinput = (document.getElementById(searchId)).value;
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + userinput);
    var data = await response.json();
    if (data['meals'] != null) {
        data = data['meals'][Math.floor(Math.random() * data['meals'].length)]

        var ingredients = Object.values(Object.keys(data)
            .filter(k => k.includes('Ingredient'))
            .reduce((o, k) => {
                if (data[k] != '' && data[k] != null) {
                    o[k] = data[k]
                }
                return o
            }, {}))
        var img = data['strMealThumb']
        var title = data['strMeal']

        //console.log(ingredients)
        //console.log(data);

        const result = document.getElementById(resultId);
        result.innerHTML = `
        <div class="recipeCard col-2 text-center">
        <div style="width: 18rem; margin-left: 60px; margin-top: 10px">
            <img src="${img}" class="card-img-top" alt="...">
            <div>
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${ingredients}</p>
            </div>
        </div>
        </div>
        `
        latestSearch = {
            'title': title,
            'img': img,
            'ingredients': ingredients,
            'steps': data['strInstructions']
        }
    } else {
        const result = document.getElementById(resultId);
        result.innerHTML = 'No results found.'
        latestSearch = null;
    }
}

function addRecipeSearch() {
    // I should probably combine this logic with the other addRecipeCard method above

    if (latestSearch != null) {
        console.log(latestSearch);
        if (firstEntry) {
            firstEntry = false
            var hidden = document.getElementById("outerRecipeCard");
            hidden.style.display = "block";
            document.getElementById("cardName"+i).innerHTML = latestSearch['title'];
        } else {
            var newCard = baseCard.cloneNode(true);
            console.log(newCard.childNodes[1].id)
            newCard.id = "recipeCard" + ++i;
            newCard.childNodes[1].id = "cardPic" + i;
            newCard.childNodes[1].src = latestSearch['img'];
            newCard.childNodes[3].childNodes[1].id = "cardName" + i;
            newCard.childNodes[3].childNodes[3].id = "cardIngre" + i;
            baseCard.parentNode.appendChild(newCard);

        }

        document.getElementById("cardName" + i).innerHTML = latestSearch['title'];
        document.getElementById("cardPic" + i).src = latestSearch['img'];
        document.getElementById("cardIngre" + i).innerHTML = latestSearch['ingredients'];
    }
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