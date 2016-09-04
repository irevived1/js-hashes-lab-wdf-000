'use strict';

function addIngredient(recipe,ingre,quantity) {
  recipe[ingre] = quantity;
  return recipe;
}

function removeIngredient(recipe,ingre) {
  delete recipe[ingre];
  return recipe;
}

function updateIngredient(recipe,ingre,quantity) {
  recipe[ingre] = quantity;
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
  return recipe;
}
