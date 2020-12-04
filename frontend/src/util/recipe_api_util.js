import axios from 'axios';

const APIKEY = "30b0946c17884b5b83299317a3e9c142"; 


export const getRecipeByIngred = (items) => {
   return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${items}&number=5&ranking=2`)
}

export const getRecipeInfo = (recipeId) => {
   return axios.get( `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${APIKEY}`);
}

