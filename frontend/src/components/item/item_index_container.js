import { connect } from 'react-redux';
import { getUserItems, createItem } from '../../actions/item_actions';
import { fetchRecipe } from '../../actions/recipe_actions';
import ItemIndex from './itemindex';
import { openModal } from '../../actions/modal_actions';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        items: state.items,
        userId: state.session.user.id,
        recipes: state.recipes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: item => dispatch(createItem(item)),
        getUserItems: userId => dispatch(getUserItems(userId)),
        fetchRecipe: (ingredients) => dispatch(fetchRecipe(ingredients)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemIndex);