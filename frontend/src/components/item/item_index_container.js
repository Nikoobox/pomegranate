import { connect } from 'react-redux';
import { getUserItems, createItem } from '../../actions/item_actions';
import ItemIndex from './itemindex';

const mapStateToProps = state => {
  
    return {
        items: state.items,
        userId: state.session.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: item => dispatch(createItem(item)),
        getUserItems: userId => dispatch(getUserItems(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemIndex);