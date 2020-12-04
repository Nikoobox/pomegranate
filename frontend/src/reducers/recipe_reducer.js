import { RECEIVE_RECIPES, RECEIVE_RECIPE_INFO, CLEAR_RECIPES } from "./../actions/recipe_actions";

const RecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RECIPES:
            return action.recipes.data
        case RECEIVE_RECIPE_INFO:
            return action.recipe.data
        case CLEAR_RECIPES:
            return {};
        default:
            return state;
    }
};

export default RecipeReducer;