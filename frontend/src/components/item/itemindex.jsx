import React from 'react'
import ItemShow from './itemshow';
import {Link} from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class ItemIndex extends React.Component {
    constructor(props
        ) {
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
            .then(() => this.setState({
                name: "",
                quantity: "",
                type: "",
                expirationDate: ""
            }));
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
        const searchItems = Object.values(this.props.items).map(item => {
            return item.name
        })

        const items = Object.values(this.props.items).map(item => {
            return <ItemShow key={item._id} item={item} history={this.props.history}/>
        });
        const recipes = Object.values(this.props.recipes).map(recipe => {
            return (
                <div key={recipe.id}>
                    <Link to={`/${recipe.id}`}
                        // onClick={() => this.props.history.push(``)}
                    >{recipe.title}</Link>
                    <img src={recipe.image} alt={recipe.title}/>
                    {recipe.usedIngredients.map(item => {
                        return <p>From kitchen: {item.name}</p>
                    })}
                    {recipe.missedIngredients.map(item => {
                        return <p>Missing Item: {item.name}</p>
                    })}
                </div>
            )
        })
        return (
            <div className='item-container'>



                <button onClick={() => this.props.fetchRecipe(`${searchItems}`)}>Discover Recipes</button>
                <div>
                    <ul>
                        {recipes}
                    </ul>
                </div>
                
                <form onSubmit={this.handleSubmit} className='item-form'>
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
                        <div className='error-container'>
                            {this.renderErrors()}
                        </div>

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