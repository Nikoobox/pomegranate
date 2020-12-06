import { connect } from 'react-redux';
import {fetchInfo} from '../../actions/map_actions';
import MapShow from './map';

const mapStateToProps = state => {
    debugger;
    return {
        user: state.session.user.id,
        info: state.ui.info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInfo: () => dispatch(fetchInfo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapShow);