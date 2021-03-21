import React from 'react'
import ItemShow from './itemshow';
import Trashbin from './Trashbin';
import {Link} from 'react-router-dom';
import { FaMapMarkerAlt} from "react-icons/fa";
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';

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
            res => {
                if (res.type === "RECEIVE_ITEM") {
                    this.setState({
                        name: "",
                        quantity: "",
                        type: "",
                        expirationDate: ""
                    });
                }
            });
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
        const customStyles = {
            control: base => ({
                ...base,
                border: '2px solid black' ,
                boxShadow: 'none',
                borderRadius: 16
            })
        };
        
        const searchItems = Object.values(this.props.items).map(item => {
            return item.name
        });

        const items = Object.values(this.props.items).map(item => {
            return <ItemShow 
            key={item._id} 
            item={item} 
            history={this.props.history} 
            openModal={this.props.openModal} 
            draggable='true'
            />
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
            recipes = this.props.recipes.map(recipe => {
                return (
                    <div key={recipe.id} className='recipe-card'>
                         
                        <div className='recipe-card-link'>

                            {recipe.missedIngredients.length === 0 ? 
                                <div className='recipe-image-box'>
                                    <Link to={`/browse/${recipe.id}`} >
                                        <img src={recipe.image} alt={recipe.title} className='recipe-image'/>
                                        <AiFillCheckCircle className='ok' />
                                    </Link> 
                                </div> :
                                <div className='recipe-image-box' >
                                    <Link to={`/browse/${recipe.id}`} >
                                        <img src={recipe.image} alt={recipe.title} className='recipe-image'/>
                                         <AiFillCloseCircle className='not-ok' />
                                    </Link>
                                    <AiFillCloseCircle className='not-ok' />
                                 </div>
                            }

                            <div className='card-info'>
                                <div className='recipe-title-box'>
                                    {recipe.title} 
                                    {/* {recipe.missedIngredients.length === 0 ? <AiFillCheckCircle className='testing'/> : <AiFillCloseCircle/>} */}
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
                                    {recipe.missedIngredients.length !== 0 ? <Link to="/googlemap"><div className='map-icon-container'>
                                    <FaMapMarkerAlt className='map-icon'/>
                                        <div className='message'>Your Location</div>
                                        </div>
                                    </Link> : "" }
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
                            <div className='welcome-message'>ADD ITEM FORM</div>   
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
                            <div className='date-label'>EXPIRATION DATE:</div>
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
                                <button>ADD ITEM</button>
                            </div>
                            <div className='error-container'>
                                {this.renderErrors()}
                            </div>
                        </form>

                        <div className='trashbin-container'>
                            {/* Garbage Bin */}
                            <Trashbin id='board-1' deleteItem={this.props.deleteItem}/>
                            {/* <div className='trash-icon-box'> */}
                                {/* <BsTrash /> */}
                            {/* </div> */}
                        </div>
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
