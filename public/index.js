var styleState = true;
const recipeList = document.getElementById('list1')

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'style2.css' : 'style1.css'
    styleState = !styleState;
}

var i=0;
var baseCard = document.getElementById('recipeCard');
var firstEntry = true;

function addRecipeCard() {
    if(firstEntry){
        firstEntry = false
        var hidden = document.getElementById("outerRecipeCard");
        hidden.style.display = "block";
        document.getElementById("cardName").innerHTML = recipeName;
    }
    
    else{
        var newCard = baseCard.cloneNode(true);
        newCard.id = "new" + ++i;
        baseCard.parentNode.appendChild(newCard);
        
    }

    var recipeName = document.forms["recipe-content"]["recipe-name"].value;
    //var fileName = document.forms["recipe-content"]["file-name"].value;
    var ingredients = document.forms["recipe-content"]["ingredients"].value;
    var steps = document.forms["recipe-content"]["steps"].value;
    var cookTime = document.forms["recipe-content"]["cook-time"].value;
    var ovenTemp = document.forms["recipe-content"]["oven-temp"].value;

    console.log(recipeName);
    document.getElementById("cardName").innerHTML = recipeName;
    

   
}

function deleteRecipe(parent) {
    const p = parent.parentElement;
    p.remove();
}


