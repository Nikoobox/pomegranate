import React from 'react';
import { Link } from 'react-router-dom';

import pom_logo from '../../images/pom_logo.png';

class MainPage extends React.Component {
constructor(props){
    super(props);


}
    render() {
        return (
            <div className="splash-container">
                <div className='title'>Splash page</div> 
                <div className='logo-box'>
                    <div className='name'>
                        Pomengranate
                    </div> 
                    <div className='img-box'>
                        <img src={pom_logo} />
                    </div> 
                </div> 
                <div className="login-logout-container">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/signup'><button>Signup</button></Link>
                    <Link to='#'><button>Demo</button></Link>
                </div>
            </div>
        );
    }
}

export default MainPage;
