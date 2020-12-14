import { connect } from 'react-redux';
import { getItem, editItem, deleteItem } from './../../actions/item_actions';
import ItemEdit from './item_edit';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // const itemId = ownProps.match.params.itemId;
    // const item = state.items[itemId];
    return {
        // itemId,
        // item,
        items: state.items,
        errors: state.errors.item
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getItem: itemId => dispatch(getItem(itemId)),
        editItem: item => dispatch(editItem(item)),
        deleteItem: itemId => dispatch(deleteItem(itemId)),
        // openModal: modal => dispatch(openModal(modal)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemEdit);