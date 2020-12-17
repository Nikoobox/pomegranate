import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import pom_logo from '../../images/pom_logo_0.png';
import { Dropdown } from 'react-bootstrap';
import { FaHamburger } from 'react-icons/fa'
import { clearItemState } from '../../actions/item_actions';
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.clearItemState();
        this.props.clearRecipeState();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='navbar'>
                    <Link to='/' className='navbar-logo-cont'>
                        <div className='logo-img'><img src={pom_logo}/></div>
                        <div className='logo-name'>Pomegranate</div>
                    </Link>
                    <div className='dropdown-container'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FaHamburger />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >My account</Dropdown.Item>
                            <LinkContainer to='/browse/contacts'>
                                <Dropdown.Item >Contacts</Dropdown.Item>
                            </LinkContainer>
                            <Dropdown.Item onClick={this.logoutUser} className='dropdown-logout'>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div> 
                </div>
            );
        } else {
            return (
                <div className='navbar'>
                    <Link to='/' className='navbar-logo-cont'>
                        <div className='logo-img'><img src={pom_logo} /></div>
                        <div className='logo-name'>Pomegranate</div>
                    </Link>
                    <Link to='/browse/contacts' className='navbar-about-cont'>
                        <div className='about'>Contacts</div>
                        
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);