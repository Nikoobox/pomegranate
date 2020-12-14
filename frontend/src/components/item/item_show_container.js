import { connect } from 'react-redux';
import {getItem } from '../../actions/item_actions';
import ItemShow from './itemshow';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.itemId
    const item = state.items.data[id]
    return {
        id,
        item
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (itemId) => dispatch(getItem(itemId)),
        openModal: (type, data) => dispatch(openModal(type, data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemShow); 