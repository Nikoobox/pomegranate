import React from 'react'

class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createKitchen(this.state).then(kitchen => {
            return this.props.history.push(`/${kitchen.kitchen.data._id}/items`)
        })
    }

    render() {
        if (this.props.kitchen) {
            return (
                <div>
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
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Kitchen;
