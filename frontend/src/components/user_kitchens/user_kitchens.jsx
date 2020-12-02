import React from 'react';

class UserKitchens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kitchens: []
        }
    }

    componentDidMount() {
        this.props.fetchUserKitchens(this.props.currentUser.id)
            .then(kitchens => {
                debugger;
                this.setState({ kitchens: kitchens.kitchens.data })
            })
    }

    render() {
        if (this.state.kitchens.length === 0) {
            return (
                <div>
                    <p>You have no Kitchens!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Your Kitchens</h1>
                    {this.state.kitchens.map(kitchen => {
                        return (
                            <div key={kitchen._id}>{kitchen.name}</div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default UserKitchens;