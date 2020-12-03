import {getRecipeByIngred} from '../util/recipe_api_util';


export const RECEIVE_RECIPE = "RECEIVE_RECIPE";

const receiveRecipe = (recipe) => {
    return {
        type: RECEIVE_RECIPE,
        recipe
    }
};

export const fetchRecipe = (ingredients) => dispatch => {
        return getRecipeByIngred(ingredients).then(recipe => dispatch(receiveRecipe(recipe)))
};