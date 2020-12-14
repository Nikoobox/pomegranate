import { connect } from 'react-redux';
import {getItem } from '../../actions/item_actions';
import ItemShow from './itemshow';
// import { openModal } from '../../actions/modal_actions';

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
<<<<<<< HEAD
        getItem: (itemId) => dispatch(getItem(itemId)),
        openModal: (type, data) => dispatch(openModal(type, data))
=======
        getItem: itemId => dispatch(getItem(itemId)),
        // openModal: modal => dispatch(openModal(modal))
>>>>>>> e23dafaa9d0e64c90a26db5662ea818a8bf2c7f2
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemShow); 