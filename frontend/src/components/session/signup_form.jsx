import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: ''
        };

        this.loginGuest = this.loginGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
            .then(user => this.props.login(JSON.parse(user.user.config.data)));
    }
    loginGuest() {
        let demo = {
            email: 'demo@gmail.com',
            password: 'room12'
        }

        this.props.login(demo)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`} className='error'>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-signup-form-container'>
                <form onSubmit={this.handleSubmit} className='log-form'>
                    <div className='welcome-message'>Join Pomegranate</div>  
                    <div className="signup-form">
                       
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Kitchen name"
                        />
                       
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                       
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                     
                        <div className='submit-btn-container'>
                            <button> Submit
                        </button>
                        </div> 
                        <div className='error-container'>
                            {this.renderErrors()}
                        </div>
                        <div className='form-sign-button'>
                            Already have an account? Please <Link to={'/login'} className='sign-button'>Login</Link>
                        </div>
                    </div>
                    <div className='demo-form-container'>
                        Or login as a <span className="demo-form-button" onClick={this.loginGuest}>Demo User</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);