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
        this.props.editItem(Object.assign( this.state, { quantity: String(this.state.quantity), _id: this.props.itemId }))
            .then(res => {
                if (res.type === "RECEIVE_ITEM") {
                    this.props.history.push("/browse")
                }
            });
        
    }

    handleDelete() {
        this.props.deleteItem(this.props.itemId)
            .then(() => this.props.history.push("/browse"));;
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

    formatDate(date) {
        const rawDate = new Date(date);
        const numSeconds = 8640000;
        const newDate = new Date(rawDate.getTime() + numSeconds);
        let year = newDate.getFullYear();
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }

    render() {
        if (this.props.item && this.checkEmptyState()) {
            this.setState({
                name: this.props.item.name,
                quantity: this.props.item.quantity,
                expirationDate: this.formatDate(this.props.item.expirationDate),
                type: this.props.item.type,
            })
        }
        return (
            <div className="item-edit-page">
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
                    <div className='error-container'>
                        {this.renderErrors()}
                    </div>
                </form>

                <button onClick={this.handleDelete}>Delete Item</button>
            </div>
        );
    }
}

export default ItemEdit;