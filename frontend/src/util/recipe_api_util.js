import axios from 'axios';

const APIKEY = "43c6aa93cab54e04a4a8b0aa9c3e08a7"; 


export const getRecipeByIngred = (items) => {
   return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${items}&number=5&ranking=2`)
}

export const getRecipeInfo = (recipeId) => {
       return axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${APIKEY}`);
}

