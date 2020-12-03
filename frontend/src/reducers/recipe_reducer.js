import { RECEIVE_RECIPE } from "./../actions/recipe_actions";

const RecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RECIPE:
            return action.recipe.data
        default:
            return state;
    }
};

export default RecipeReducer;