import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            kitchenName: '',
            address: "",
            password: '',
            password2: ''
        };

        this.loginGuest = this.loginGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
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
            address: this.state.address,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
            .then(user => {
                return this.props.login(JSON.parse(user.user.config.data))
            })
            .catch(err => console.log(err));
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
                    <div className='welcome-message'>JOIN POMEGRANATE</div>  
                    <div className="signup-form">
                       
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        
                        <input type="text"
                            value={this.state.kitchenName}
                            onChange={this.update('kitchenName')}
                            placeholder="Kitchen name"
                        />

                        <input type="text"
                            value={this.state.address}
                            onChange={this.update('address')}
                            placeholder="Home address"
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
                            <button> SUBMIT
                        </button>
                        </div> 
                        <div className='error-container'>
                            {this.renderErrors()}
                        </div>
                        <div className='form-sign-button'>
                            Already have an account? Please <Link to={'/login'} className='sign-button'>LOGIN</Link>
                        </div>
                    </div>
                    <div className='demo-form-container'>
                        Or login as a <span className="demo-form-button" onClick={this.loginGuest}>DEMO USER</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);