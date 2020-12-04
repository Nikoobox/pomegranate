import { connect } from 'react-redux';
// import { getUserItems, createItem } from '../../actions/item_actions';
import { clearRecipeState, fetchRecipeInfo } from '../../actions/recipe_actions';
import Recipe from './recipe';

const mapStateToProps = (state, {match}) => {
    // debugger;
    const id = match.params.recipeId
    return {
        id,
        recipe: state.recipes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeInfo: (recipeId) => dispatch(fetchRecipeInfo(recipeId)),
        clearRecipeState: () => dispatch(clearRecipeState())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);