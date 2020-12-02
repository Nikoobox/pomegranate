import { connect } from 'react-redux';
import { fetchUserKitchens } from '../../actions/kitchen_actions';
import UserKitchens from './user_kitchens';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserKitchens: kitchens => dispatch(fetchUserKitchens(kitchens))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserKitchens);