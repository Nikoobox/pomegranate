import {
    getRecipeByIngred,
    getRecipeInfo 
} from '../util/recipe_api_util';


export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_INFO = "RECEIVE_RECIPE_INFO";
export const CLEAR_RECIPES = "CLEAR_RECIPES";

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

const clearRecipes = () => {
    return {
        type: CLEAR_RECIPES
    }
}

export const fetchRecipe = (items) => dispatch => {
        return getRecipeByIngred(items).then(recipes => dispatch(receiveRecipes(recipes)))
};

export const fetchRecipeInfo = (recipeId) => dispatch => {
        return getRecipeInfo(recipeId).then(recipe => dispatch(receiveRecipeInfo(recipe)))
};

export const clearRecipeState = () => dispatch => {
    return dispatch(clearRecipes());
};