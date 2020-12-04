import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            kitchenName: '',
            password: '',
            password2: ''
        };

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
            kitchenName: this.state.kitchenName,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
            .then(user => {
                return this.props.login(JSON.parse(user.user.config.data))
            })
            .catch(err => console.log(err));
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
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='welcome-message'>Join Pomegranate</div>  
                    <div className="signup-form">
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.kitchenName}
                            onChange={this.update('kitchenName')}
                            placeholder="Kitchen name"
                        />
                        {/* <br /> */}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        {/* <br /> */}
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        {/* <br /> */}
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
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);