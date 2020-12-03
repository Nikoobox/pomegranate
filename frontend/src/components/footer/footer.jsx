import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='footer-container'>

                <div className="footer-message">
                    This is Pomegranate footer
                </div>

            </div>
        )
    }
}

export default Footer;