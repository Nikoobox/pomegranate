import { connect } from 'react-redux';
import { getUser } from './../../actions/session_actions';
import MapShow from './map';

const mapStateToProps = state => {
    return {
        userId: state.session.user.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: userId => dispatch(getUser(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapShow);