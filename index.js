var styleState = true;
const recipeList = document.getElementById('list1')

function swapCSS() {
    const current = document.getElementById('customStyle');
    current.href = styleState ? 'style2.css' : 'style1.css'
    styleState = !styleState;
}

function addRecipe() {
    const newRecipe = document.createElement('li');
    /*get form submission later*/
    const content = `
    <div class="recipeCard col-2 text-center">
        <button class="btn card-button black delete" onclick="deleteRecipe(this)">Remove</button>
        <div class="card" style="width: 18rem;">
            <img src="imgs/recipe1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn card-button text-white">Go somewhere</a>
            </div>
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

function searchRecipe(inputId) {
    console.log(inputId);
}