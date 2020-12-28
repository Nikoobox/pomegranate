import { connect } from 'react-redux';
// import { receiveCurrentUser } from '../../actions/session_actions';
import { getUserItems, createItem, clearItemState } from '../../actions/item_actions';
import { fetchRecipe, clearRecipeState } from '../../actions/recipe_actions';
import ItemIndex from './itemindex';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // console.log(state)
    return {
        items: state.items,
        userId: state.session.user.id,
        recipes: state.recipes.recipesList,
        errors: state.errors.item, 
        user:state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
        createItem: item => dispatch(createItem(item)),
        getUserItems: userId => dispatch(getUserItems(userId)),
        fetchRecipe: (ingredients) => dispatch(fetchRecipe(ingredients)),
        openModal: (modal, itemId) => dispatch(openModal(modal, itemId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemIndex);