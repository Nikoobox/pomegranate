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
                    Completed by Room12 Team
                </div>

                <div className="footer-message">
                    Pomegranate MERN project
                </div>

                <div className="social">
                    Github
                    <a href='https://github.com/Nikoobox/pomegranate' rel='noopener noreferrer' target="_blank">
                        <FaGithubSquare />
                    </a>
                </div>

            </div>
        )
    }
}

export default Footer;