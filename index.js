const form = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');
const selectType = document.querySelector("#type");
const selectDifficulty = document.querySelector("#difficulty");
const recipeList = document.querySelector("#recipe-list");

let recipes = [];

function renderRecipes() {
  recipeList.innerHTML = "";

  for(let i = 0; i <= recipes.length - 1; i++) {

    const li = document.createElement("li");
    const recipeInfo = document.createElement("span");
    recipeInfo.classList.add("recipe-info");
    recipeInfo.innerHTML = `
      <strong>${recipes[i].title}</strong> <br/> ${recipes[i].type} <br/> ${recipes[i].difficulty}
    `;

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    editButton.addEventListener("click", () => {
      inputText.value = recipes[i].title;
      selectType.value = recipes[i].type;
      selectDifficulty.value = recipes[i].difficulty;
      deleteRecipe(i);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    deleteButton.addEventListener("click", () => {
      deleteRecipe(i);
    });

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    li.appendChild(recipeInfo);
    li.appendChild(buttons);
    recipeList.appendChild(li);
  }

}

function addRecipe(event) {
  event.preventDefault();
  const title = inputText.value;
  const type = selectType.value;
  const difficulty = selectDifficulty.value;

  if (title === "") {
    alert("Digite um nome de receita válido!");
    return;
  }

  const recipe = { title, type, difficulty };
  recipes.push(recipe);
  inputText.value = "";
  selectType.value = "";
  selectDifficulty.value = "";
  renderRecipes();
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  renderRecipes();
}

form.addEventListener("submit", addRecipe);
