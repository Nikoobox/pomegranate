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
                    Completed by 
                    <Link to='/browse/contacts'>Room12</Link>
                </div>


                <div className="social">
                    {/* <div className="footer-message">
                        MERN project
                    </div> */}
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