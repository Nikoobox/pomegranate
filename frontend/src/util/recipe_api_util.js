import axios from 'axios';
require('dotenv').config();

const spoon = process.env.REACT_APP_SPOONACULAR


export const getRecipeByIngred = (items) => {
   return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoon}&ingredients=${items}&number=5&ranking=2`)
}
export const getRecipeInfo = (recipeId) => {
   return axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${spoon}`);
}
