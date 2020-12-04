import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearItemState } from './../../actions/item_actions';
import { clearRecipeState } from './../../actions/recipe_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearItemState: () => dispatch(clearItemState()),
    clearRecipeState: () => dispatch(clearRecipeState())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);