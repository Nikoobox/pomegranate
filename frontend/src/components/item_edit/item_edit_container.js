import { connect } from 'react-redux';
import { getItem, editItem, deleteItem } from './../../actions/item_actions';
import ItemEdit from './item_edit';

const mapStateToProps = (state, ownProps) => {
    const itemId = ownProps.match.params.itemId;
    const item = state.items[itemId];
    return {
        itemId,
        item
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getItem: itemId => dispatch(getItem(itemId)),
        editItem: item => dispatch(editItem(item)),
        deleteItem: itemId => dispatch(deleteItem(itemId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemEdit);