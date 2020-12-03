import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import pom_logo from '../../images/pom_logo.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                
                <div className='navbar'>
                    {/* <div className='navbar-logo-cont'> */}
                        <Link to='/' className='navbar-logo-cont'>
                            <div className='logo-img'><img src={pom_logo }/></div>
                            <div className='logo-name'>Pomegranate</div>
                        </Link>
                    {/* </div> */}
                    <div className='navbar-logout-cont'>
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>

                <div>

           

                </div>
            );
        } else {
            return (
                <div className='navbar'>
                    <div className='login-container'>
                        <Link to={'/login'} className='login-button'>Login</Link>
                    </div> 

                    <div className='signup-container'>
                        <Link to={'/signup'} className='signup-button'>Signup</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                { this.getLinks()}
            </div>
        );
    }
}

export default NavBar;