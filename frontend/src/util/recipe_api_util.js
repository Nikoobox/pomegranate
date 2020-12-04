import axios from 'axios';

const APIKEY = "227956752c904fc1b6561d11c56f95b1"; 

export const getRecipeByIngred = (items) => {
   return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${items}&number=5&ranking=2`)
}


export const getRecipeInfo = (recipeId) => {
   return axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${APIKEY}`);
}

