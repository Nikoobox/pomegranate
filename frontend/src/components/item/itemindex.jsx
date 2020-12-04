import React from 'react'
import ItemShow from './itemshow';
import {Link} from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class ItemIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            quantity: "",
            type: "",
            expirationDate: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getUserItems(this.props.userId);
        // this.props.fetchRecipe('broccoli');
    }

    // recipes() {
    //     this.props.fetchRecipe(`${this.props.items.join(',+')}`)
    // }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }å

    handleSubmit(e) {
        e.preventDefault();
        let item = {
            name: this.state.name,
            quantity: this.state.quantity,
            type: this.state.type,
            expirationDate: this.state.expirationDate
        };

        this.props.createItem(item)
     
    }


    render() {
        const items = Object.values(this.props.items).map(item => {
            return <ItemShow item={item} history={this.props.history}/>
        });
        const recipes = Object.values(this.props.recipes).map(ingredients => {
            return (
                <div>
                    <a>{ingredients.title}</a> 
                    <img src={ingredients.image} alt={ingredients.tile}/>
                </div>
            )
        })
        return (
            <div className='item-container'>

                {/* {recipes} */}
                
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='welcome-message'>Add Item Form</div>   
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder="Item name"
                    />
                    <input
                        type="number"
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        placeholder="Item quantity"
                    />
                    <input
                        type="date"
                        value={this.state.expirationDate}
                        onChange={this.update('expirationDate')}
                        placeholder="Enter an Expiration Date"
                    />
                    <input
                        type="text"
                        value={this.state.type}
                        onChange={this.update('type')}
                        placeholder="Enter an item type"
                    />
                    <div className='submit-item-btn-container'>
                    <button>Add Item</button>

                    </div>
                </form>
                <div className='items'>
                    <div className='message'>Your Kitchen has the following products:</div>
                    <div className='items-container'>
                        {items}

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ItemIndex;