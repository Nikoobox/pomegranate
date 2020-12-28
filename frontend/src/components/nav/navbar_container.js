import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearItemState } from './../../actions/item_actions';
import { clearRecipeState } from './../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import { getUser } from './../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
    if (state.session.isAuthenticated){
        return {
            loggedIn: state.session.isAuthenticated,
            userId: state.session.user.id,
            kitchenName: ''
        }
    }else{
        return {
            loggedIn: state.session.isAuthenticated,
            kitchenName: ''
        }
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearItemState: () => dispatch(clearItemState()),
    clearRecipeState: () => dispatch(clearRecipeState()),
    openModal: modal => dispatch(openModal(modal)),
    getUser: userId => dispatch(getUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);





