import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => {
           return dispatch(signup(user))
        },
        login: user => {
           return dispatch(login(user))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);