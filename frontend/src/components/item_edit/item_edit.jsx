import React from 'react'

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            quantity: "",
            expirationDate: "",
            type: ""
        }
        this.checkEmptyState = this.checkEmptyState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getItem(this.props.itemId);

    }

    checkEmptyState() {
        if (this.state.name === ""
            && this.state.quantity === ""
            && this.state.expirationDate === ""
            && this.state.type === ""
        ) {
            return true;
        } else {
            return false;
        }

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editItem(Object.assign( this.state, { _id: this.props.itemId }))
            .then(() => this.props.history.push("/browse"));
    }

    handleDelete() {
        this.props.deleteItem(this.props.itemId)
            .then(() => this.props.history.push("/browse"));;
    }

    render() {
        if (this.props.item && this.checkEmptyState()) {
            this.setState({
                name: this.props.item.name,
                quantity: this.props.item.quantity,
                expirationDate: new Date(this.props.item.expirationDate),
                type: this.props.item.type,
            })
        }
        return (
            <div className="item-edit-page">
                <p>Hi</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder="Enter name"
                    />
                    <br />
                    <input type="number"
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        placeholder="Enter quantity"
                    />
                    <br />
                    <input type="date"
                        value={this.state.expirationDate}
                        onChange={this.update('expirationDate')}
                        placeholder="Enter date"
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.type}
                        onChange={this.update('type')}
                        placeholder="Enter an item type"
                    />
                    <br />
                    <input type="submit" value="Edit Item" />
                </form>

                <button onClick={this.handleDelete}>Delete Item</button>
            </div>
        );
    }
}

export default ItemEdit;