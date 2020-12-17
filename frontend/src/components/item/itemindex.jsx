import React from 'react'
import ItemShow from './itemshow';
import {Link} from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";

import Select from 'react-select'


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
        this.updateType = this.updateType.bind(this);
    }
    componentDidMount() {
        this.props.getUserItems(this.props.userId);
        // this.props.recieveCurrentUser(this.props.userId);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateType(e){
        this.setState({
            type: e.value
        })
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
                    console.log(err);
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
        console.log(this.props)
        const customStyles = {
            control: base => ({
                ...base,
                border: 0,
                boxShadow: 'none',
            })
        };
        
        const searchItems = Object.values(this.props.items).map(item => {
            return item.name
        });

        const items = Object.values(this.props.items).map(item => {
            return <ItemShow key={item._id} item={item} history={this.props.history} openModal={this.props.openModal}/>
        });

        const options = [
            { label: "Fruits and vegetables", value: "Fruits and vegetables"},
            { label: "Dairy", value: "Dairy", className: 'custom-class'},
            {label: "Meat", value: "Meat"},
            {label: "Grains", value: "Grains"},
            {label: "Beverages",value: "Beverages"},
            {label: "Misc", value: "Misc"}]
           
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
                                <Link to="/googlemap"><div className='map-icon-container'>
                                    <FaMapMarkerAlt className='map-icon'/>
                                    <div className='message'>See nearby stores </div>
                                </div>
                                </Link>
                                
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
                            <Select 
                                styles={customStyles}
                                options={options} 
                                placeholder = {this.state.type === ''? 'Select an item type': this.state.type }
                                value={this.state.type}
                                onChange={this.updateType}
                                />
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
