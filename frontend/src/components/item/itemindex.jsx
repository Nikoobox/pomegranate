import React from 'react'
import ItemShow from './itemshow';
import {Link} from 'react-router-dom';
import { AiOutlineArrowDown } from "react-icons/ai";
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

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
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

  handleSubmit(e) {
    e.preventDefault();
    let item = {
      name: this.state.name,
      quantity: this.state.quantity,
      type: this.state.type,
      expirationDate: this.state.expirationDate,
    };
    this.props.createItem(item)
        .then(
        err => {
            console.log(err)
        },
            this.setState({
                name: "",
                quantity: "",
                type: "",
                expirationDate: ""
            })
        );
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
        });

        const items = Object.values(this.props.items).map(item => {
            return <ItemShow key={item._id} item={item} history={this.props.history}/>
        });
        
        let recipes;
        if (Array.isArray(this.props.recipes)) {
            recipes = Object.values(this.props.recipes).map(recipe => {
                return (
                    <div key={recipe.id} className='recipe-card'>
                        <div className='recipe-card-link'>
                            <Link to={`/${recipe.id}`} className='recipe-image-box'>
                                <img src={recipe.image} alt={recipe.title} className='recipe-image'/>
                            </Link>
                            <div className='card-info'>
                                <div className='recipe-title-box'>
                                    {recipe.title}
                                </div>
                                <div className='from-kitchen-box'>
                                    {recipe.usedIngredients.map(item => {
                                        return <div key={item.originalString} className='kitchen-item-yes'>From kitchen: {item.name}</div>
                                    })}
                                </div>
                                <div className='missing-items-box'>
                                    {recipe.missedIngredients.map(item => {
                                        return <div key={item.originalString} className='kitchen-item-no'><Link to="/googlemap"> Missing Item: {item.name}</Link></div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div>
                <div className='item-container'>
                    <div className='form-container'>
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
                            {/* <input
                                type="text"
                                value={this.state.type}
                                onChange={this.update('type')}
                                placeholder="Enter an item type"
                            /> */}


                            <div className="form-control-input">
                                <select className="form-control" onChange={this.update('type')} required>
                                    {/* <optgroup className='options'> */}
                                        <option selected>Select an item type</option>
                                        <option value="Fruits and vegitables">Fruits and vegitables</option>
                                        <option value="Meat">Meat</option>
                                        <option value="Dairy">Dairy</option>
                                        <option value="Grains">Grains</option>
                                        <option value="Beverages">Beverages</option>
                                        <option value="Condiments">Condiments</option>
                                        <option value="Misc">Misc</option>

                                    {/* </optgroup> */}
                                </select>
                            </div>

                            <div className='submit-item-btn-container'>
                                <button>Add Item</button>
                            </div>
                            <div className='error-container'>
                                {this.renderErrors()}
                            </div>
                        </form>
                    </div>

                    <div className='items'>
                        <div className='message'>Your Kitchen has the following products:</div>
                        <div className='items-container'>
                            {items}
                        </div>
                    </div>

                </div>

                <div className='recipes-container'>
                    <div className='fetch-rec-button-box'>
                        <button onClick={() => this.props.fetchRecipe(`${searchItems}`)}>Discover Recipes
                            {/* <span><AiOutlineArrowDown /></span> */}
                        </button>
                        <div className='recipes-box'>
                            {recipes}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemIndex;
