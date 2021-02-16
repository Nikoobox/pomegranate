import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.loginGuest = this.loginGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/browse');
        }

        // Set or clear errors
        
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    loginGuest() {
        let demo = {
            email: 'demo@gmail.com',
            password: 'room12'
        }

        this.props.login(demo)
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className='error'>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-signup-form-container'>
                <form onSubmit={this.handleSubmit} className='log-form'>
                    <div className='welcome-message'>WELCOME BACK</div>   
                    
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                    />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                    />
                    <div className='submit-btn-container'>
                        <button> SUBMIT
                        </button>
                    </div> 
                    <div className='error-container'>
                        {this.renderErrors()}
                    </div>
                    
                    <div className='form-sign-button'>
                    Not a user? please <Link to={'/signup'} className='sign-button'>SIGNUP</Link>
                    </div>

                    <div className='demo-form-container'>
                        Or login as a <span className="demo-form-button" onClick={this.loginGuest}> DEMO USER</span>
                    </div>

                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);