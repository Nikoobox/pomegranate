import { connect } from 'react-redux';

import Contact from './contact';

const mapStateToProps = state => {
    // console.log(state)
    return {
        errors: state.errors
    }
};



export default connect(mapStateToProps, null)(Contact);
