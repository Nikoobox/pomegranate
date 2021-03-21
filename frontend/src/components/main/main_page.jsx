import React from 'react';
import { Link } from 'react-router-dom';
import pom_logo from '../../images/pom_logo_0.png';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.loginGuest = this.loginGuest.bind(this);
    }

    loginGuest() {
        let demo = {
            email: 'demo@gmail.com',
            password: 'room12'
        }
        this.props.login(demo)
    }
    render() {
        return (
            <div className="splash-container">
                <div className='logo-box'>
                    <div className='img-box'>
                        <img src={pom_logo} />
                    </div> 
                    <div className='name'>
                        Pomegranate
                    </div> 
                    <div className='sub-name'>
                        Tell us know what ingredients you already have in your kitchen and let Pomegranate find you
                        exiting new recipes to try.
                    </div> 
                </div> 
                <div className="login-logout-container">
                    <Link to='/login'><button className="login">Login</button></Link>
                    <Link to='/signup'><button className="signup">Signup</button></Link>
                    <Link to='#'><button className="demo" onClick={this.loginGuest}>Demo</button></Link>
                </div>
            </div>
        );
    }
}

export default MainPage;
