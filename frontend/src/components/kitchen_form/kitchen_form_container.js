import { connect } from 'react-redux';
import { createKitchen } from '../../actions/kitchen_actions';
import KitchenForm from './kitchen_form';

const mapStateToProps = (state) => {
    console.log(state.errors.kitchen)
    return {
        errors: state.errors.kitchen,
        signedIn: state.session.isSignedIn,
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