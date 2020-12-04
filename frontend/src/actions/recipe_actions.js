import {
    getRecipeByIngred,
    getRecipeInfo 
} from '../util/recipe_api_util';


export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_INFO = "RECEIVE_RECIPE_INFO";

const receiveRecipes = (recipes) => {
    return {
        type: RECEIVE_RECIPES,
        recipes
    }
};

const receiveRecipeInfo = (recipe) => {
    return {
        type: RECEIVE_RECIPE_INFO,
        recipe
    }
};

export const fetchRecipe = (items) => dispatch => {
        return getRecipeByIngred(items).then(recipes => dispatch(receiveRecipes(recipes)))
};

export const fetchRecipeInfo = (recipeId) => dispatch => {
        return getRecipeInfo(recipeId).then(recipe => dispatch(receiveRecipeInfo(recipe)))
};