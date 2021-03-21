import { connect } from 'react-redux';
import { getUserItems, createItem, clearItemState, deleteItem } from '../../actions/item_actions';
import { fetchRecipe, clearRecipeState } from '../../actions/recipe_actions';
import ItemIndex from './itemindex';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
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
        createItem: item => dispatch(createItem(item)),
        getUserItems: userId => dispatch(getUserItems(userId)),
        fetchRecipe: (ingredients) => dispatch(fetchRecipe(ingredients)),
        openModal: (modal, itemId) => dispatch(openModal(modal, itemId)),
        deleteItem: itemId => dispatch(deleteItem(itemId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemIndex);