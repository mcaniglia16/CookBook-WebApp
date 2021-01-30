var styleState = true;
var userCustomImg = '';

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
        console.log(newCard.childNodes)
        newCard.id = "recipeCard" + ++i;
        newCard.childNodes[1].id = "cardPic" + i;
        baseCard.parentNode.appendChild(newCard);
        
    }

    var recipeName = document.forms["recipe-content"]["recipe-name"].value;
    var ingredients = document.forms["recipe-content"]["ingredients"].value;
    var steps = document.forms["recipe-content"]["steps"].value;
    var cookTime = document.forms["recipe-content"]["cook-time"].value;
    var ovenTemp = document.forms["recipe-content"]["oven-temp"].value;

    console.log(recipeName);
    document.getElementById("cardName").innerHTML = recipeName;
    document.getElementById("cardPic"+i).src = userCustomImg;
    console.log(userCustomImg);
    

   
}

function deleteRecipe(parent) {
    const p = parent.parentElement;
    p.remove();
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
            'img' : img,
            'ingredients': ingredients,
            'steps': data['strInstructions']
        }
    }
    else {
        const result = document.getElementById(resultId);
        result.innerHTML = 'No results found.'
        latestSearch = null;
    }
}

function addRecipeSearch() {
    // I should probably combine this logic with the other addRecipeCard method above

    if (latestSearch != null) {
        console.log(latestSearch);
        if(firstEntry){
            firstEntry = false
            var hidden = document.getElementById("outerRecipeCard");
            hidden.style.display = "block";
            document.getElementById("cardName").innerHTML = latestSearch['title'];
        }
        
        else{
            var newCard = baseCard.cloneNode(true);
            console.log(newCard.childNodes[1].id)
            newCard.id = "recipeCard" + ++i;
            newCard.childNodes[1].id = "cardPic" + i;
            newCard.childNodes[1].src = latestSearch['img'];
            baseCard.parentNode.appendChild(newCard);
            
        }
    }
}

function deleteRecipe(parent) {
    const p = parent.parentElement;
    p.remove();
}
