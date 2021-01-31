var styleState = true;
const recipeList = document.getElementById('list1')

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'style2.css' : 'style1.css'
    styleState = !styleState;
}

var i = 0;
var baseCard = document.getElementById('recipeCard');
var firstEntry = true;

function addRecipeCard() {

    var recipeName = document.forms["recipe-content"]["recipe-name"].value;
    //var fileName = document.forms["recipe-content"]["file-name"].value;
    var ingredients = document.forms["recipe-content"]["ingredients"].value;
    var steps = document.forms["recipe-content"]["steps"].value;
    var cookTime = document.forms["recipe-content"]["cook-time"].value;
    var ovenTemp = document.forms["recipe-content"]["oven-temp"].value;
    var nutritionalInfo = document.forms["recipe-content"]["nutrition"].value;

    document.getElementById("cardName").innerHTML = recipeName;
    document.getElementById("cardNutrition").innerHTML = nutritionalInfo



    var incorrectInput = false;
    var nameEntered = false;
    var ingEntered = false;
    var stepsEntered = false;
    var cTimeEntered = false;
    var oTempEntered = false;
    var nInfoEntered = false;

    

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

    if (nutritionalInfo == "") {
        document.getElementById("nFacts").style.borderColor = "red";
        incorrectInput = true;
    } else { nInfoEntered = true; }



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
            baseCard.parentNode.appendChild(newCard);
        }
    }
    if(nameEntered){document.getElementById("rName").style.borderColor="black";}
    if(ingEntered){document.getElementById("ings").style.borderColor = "black";}
    if(stepsEntered){document.getElementById("ste").style.borderColor = "black";}
    if(cTimeEntered){document.getElementById("cTime").style.borderColor = "black";}
    if(oTempEntered){document.getElementById("oTemp").style.borderColor = "black";}
    if(nInfoEntered){document.getElementById("nFacts").style.borderColor = "black";}
        
        
}




function closeNewRecipePrompt() {

}



function deleteRecipe(parent) {
    const p = parent.parentElement;
    p.remove();
}
