import React from 'react'

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            quantity: "",
            expirationDate: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getItem(this.props.itemId);
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

        return (
            <div className="item-edit-page">
                <p>Hi</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder={this.props.item.name}
                    />
                    <br />
                    <input type="number"
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        placeholder={this.props.item.quantity}
                    />
                    <br />
                    <input type="date"
                        value={this.state.expirationDate}
                        onChange={this.update('expirationDate')}
                        placeholder="Enter date"
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