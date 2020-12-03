import React from 'react';
import { Link } from 'react-router-dom';

import pom_logo from '../../images/pom_logo_0.png';
import back_img from '../../images/back1.jpg';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.loginGuest = this.loginGuest.bind(this);
    }

    loginGuest() {
        // this.setState({ email: 'demo@mail.com', password: 'hunter12' });
        let demo = {
            email: 'demo@gmail.com',
            password: 'room12'
        }
        this.props.login(demo)
    }
    render() {
        return (
            <div className="splash-container">
                <div className='title'>Splash page</div>
                <div className='logo-box'>
                    <div className='img-box'>
                        <img src={pom_logo} />
                    </div> 
                    <div className='name'>
                        Pomengranate
                    </div> 
                    <div className='sub-name'>
                        Start by selecting ingredients you already have on your kitchen from several categories.
                        As you add available ingredients, we will suggest you recipes.
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