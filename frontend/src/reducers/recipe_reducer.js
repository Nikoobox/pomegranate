import { RECEIVE_RECIPES, RECEIVE_RECIPE_INFO, CLEAR_RECIPES, CLEAR_CURRENT_RECIPE } from "./../actions/recipe_actions";

const RecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RECIPES:
            return { recipesList: action.recipes.data, currentRecipe: null };
        case RECEIVE_RECIPE_INFO:
            return Object.assign({}, newState, { currentRecipe: action.recipe.data });
        case CLEAR_RECIPES:
            return Object.assign({}, newState, { recipesList: null });
        case CLEAR_CURRENT_RECIPE:
            return Object.assign({}, newState, { currentRecipe: null });
        default:
            return state;
    }
};

export default RecipeReducer;