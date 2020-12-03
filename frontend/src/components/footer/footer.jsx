import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='footer-container'>

                <div className="footer-left">
                    Completed by Room-12 team
                </div>

                <div className="footer-message">
                    This is Pomegranate MERN project
                </div>

                <div className="social">
                    
                    <a href='https://github.com/Nikoobox/pomegranate'>
                        <FaGithubSquare />
                    </a>
                </div>

            </div>
        )
    }
}

export default Footer;