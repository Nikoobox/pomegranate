import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import MainPage from './main_page';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);