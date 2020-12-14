import { connect } from 'react-redux';
import {fetchInfo} from '../../actions/map_actions';
import { getUser } from './../../actions/session_actions';
import MapShow from './map';

const mapStateToProps = state => {
    return {
        userId: state.session.user.id,
        info: state.ui.info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInfo: () => dispatch(fetchInfo()),
        getUser: userId => dispatch(getUser(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapShow);