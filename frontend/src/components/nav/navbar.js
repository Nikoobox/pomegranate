import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import pom_logo from '../../images/pom_logo_0.png';
import { Dropdown } from 'react-bootstrap';
import { FaHamburger } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


let nv, ft;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.state = {kitchenName: ''};
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.clearItemState();
        this.props.clearRecipeState();
    }

    componentDidMount(){
        window.addEventListener('scroll',this.toggleNavbar)
    }

    toggleNavbar=()=>{
        nv = document.querySelector('.navbar');
        ft = document.querySelector('.footer-container');
        if (window.pageYOffset>10){
            nv.className = `navbar white`;
            ft.className = `footer-container white`;
        }else{
            nv.className = `navbar`;
            ft.className = `footer-container`;
        }
    }


    componentDidUpdate() {
        
        if (this.props.loggedIn && (this.state.kitchenName==='')){
            this.props.getUser(this.props.userId)
            .then(res=>{
                this.setState(()=>{
                    return { kitchenName: res.user.data.kitchenName}
                })  
            })
        }
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
                                <LinkContainer to='/browse'>
                                    <Dropdown.Item id='kitchen-name-link'>{this.state.kitchenName !== ''?this.state.kitchenName:''}</Dropdown.Item>
                                </LinkContainer>
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