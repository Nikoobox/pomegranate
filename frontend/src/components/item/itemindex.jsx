import React from 'react'
import ItemShow from './itemshow';

export class ItemIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            quantity: "",
            // type: "",
            expirationDate: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getAllItems();
        this.props.getKitchen(this.props.kitchenId)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let item = {
            name: this.state.name,
            quantity: this.state.quantity,
            // type: this.state.type,
            expirationDate: this.state.expirationDate,
            kitchen: this.props.kitchenId
        };

        this.props.createItem(item)
        // .then(() => {this.props.history.push("/browse")});
    }

    render() {
        // debugger;
        // const items = this.props.items.map(item => {
        //     <ItemShow item={item} history={this.props.history}/>
        // })
        // debugger;
        return (
            <div>

            
                <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Item name"
                        />
                        <br />
                        <input type="number"
                            value={this.state.quantity}
                            onChange={this.update('quantity')}
                            placeholder="Item quantity"
                        />
                        <br />
                        <input type="date"
                            value={this.state.expirationDate}
                            onChange={this.update('expirationDate')}
                            placeholder="Enter an Expiration Date"
                        />
                        <br />
                        <input type="submit" value="Add Item"/>
                </form>
                {/* <ul>
                    {items}
                </ul> */}
            </div>
        )
    }
}

export default ItemIndex;