import { connect } from 'react-redux';
import { createKitchen } from '../../actions/kitchen_actions';
import KitchenForm from './kitchen_form';

const mapStateToProps = (state) => {
    return {
        kitchen: state.kitchen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createKitchen: kitchenForm => dispatch(createKitchen(kitchenForm))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KitchenForm);