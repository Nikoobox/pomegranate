import { session } from 'passport';
import { connect } from 'react-redux';
import { getUserItems, editItem } from '../../actions/item_actions';
import { clearRecipeState, fetchRecipeInfo } from '../../actions/recipe_actions';
import Recipe from './recipe';

const mapStateToProps = (state, {match}) => {
    const id = match.params.recipeId
    return {
        id,
        recipe: state.recipes,
        items: state.items,
        userId: state.session.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeInfo: (recipeId) => dispatch(fetchRecipeInfo(recipeId)),
        clearRecipeState: () => dispatch(clearRecipeState()),
        getUserItems: (userId) => dispatch(getUserItems(userId)),
        editItem: (itemId) => dispatch(editItem(itemId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);