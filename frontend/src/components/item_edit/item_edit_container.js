import { connect } from 'react-redux';
import { getItem, editItem, deleteItem } from './../../actions/item_actions';
import ItemEdit from './item_edit';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const itemId = state.ui.modal.itemId;
    const item = state.items[itemId];
    // console.log(state);
    return {
        itemId,
        item,
        errors: state.errors.item
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getItem: itemId => dispatch(getItem(itemId)),
        editItem: item => dispatch(editItem(item)),
        deleteItem: itemId => dispatch(deleteItem(itemId)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemEdit);