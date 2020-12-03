import { connect } from 'react-redux';
import {getAllItems, createItem } from '../../actions/item_actions';
import { getKitchen } from '../../actions/kitchen_actions';
import ItemIndex from './itemindex';

const mapStateToProps = (state, ownProps) => {
    const kitchenId = ownProps.match.params.kitchenId
    return {
        items: state.items.data,
        kitchenId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: item => dispatch(createItem(item)),
        getAllItems: () => dispatch(getAllItems()),
        getKitchen: kitchenId => dispatch(getKitchen(kitchenId))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemIndex);