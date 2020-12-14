import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { receiveErrors } from '../../actions/session_actions';
import TestContainer from '../nav/test_container';
import ItemEditContainer from './item_edit_container';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
//*********** YOU HAVE ACCESS TO THE USER ID USING modal.userId ****************//
    switch (modal.modal) {
        case 'edit':
            component = <ItemEditContainer />;
            break;
        case 'test':
            component = <TestContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {
            dispatch(closeModal());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

