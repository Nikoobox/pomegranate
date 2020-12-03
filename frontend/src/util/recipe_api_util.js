import axios from 'axios';

const APIKEY = "95901845b9c34abd8dd5ca0e9eeefafd"; 


export const getRecipeByIngred = (ingredients) => {
   return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${ingredients}&number=5&ranking=2`)
}

export const getRecipeInfo = (recipeId) => {
   return axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${APIKEY}`);
}

