import React from 'react'

class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/browse');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createKitchen(this.state)
            .then(kitchen => {
                return this.props.history.push(`/${kitchen.kitchen.data._id}/items`)
            })
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );

    }

    render() {
        // const {errors}=this.props.errors;
        console.log(this.props);
        // console.log(this.state)
        if (this.props.kitchen) {
            return (
                <div className='kitchen-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Kitchen Name</label>
                        <input
                            type="text"
                            id="name"
                            value={this.state.name}
                            onChange={this.update("name")}
                        />
                        <input
                            type="submit"
                            value="Create a new Kitchen"
                        />
                    </form>

                    {this.renderErrors()}

                    {/* {this.props.errors.map((err,idx)=>{
                        return <div>{err}</div>
                    })} */}
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Kitchen;
