import React from 'react'
import ItemShow from './itemshow';
import {Link} from 'react-router-dom';

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
            // this.props.fetchRecipe('broccoli')
    }

    // recipes() {
    //     this.props.fetchRecipe(`${this.props.items.join(',+')}`)
    // }
    
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
            type: this.state.type,
            expirationDate: this.state.expirationDate
            // user: this.props.userId
        };

        this.props.createItem(item)
        // .then(() => {this.props.history.push("/browse")});
    }

    // itemRemider(item) {
    //     window.alert(`you are almost out of ${item}`)
    // }

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
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Item name"
                        />
                        <br />
                        <input
                            type="number"
                            value={this.state.quantity}
                            onChange={this.update('quantity')}
                            placeholder="Item quantity"
                        />
                        <br />
                        <input
                            type="date"
                            value={this.state.expirationDate}
                            onChange={this.update('expirationDate')}
                            placeholder="Enter an Expiration Date"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.type}
                            onChange={this.update('type')}
                            placeholder="Enter an item type"
                        />
                        <br />
                        <input type="submit" value="Add Item"/>
               
                </form>
                <br/>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default ItemIndex;