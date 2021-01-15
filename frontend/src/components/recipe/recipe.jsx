import React from 'react';
import {GrNotes} from 'react-icons/gr';

class Recipe extends React.Component {
    constructor(props) {
        super(props)

        this.handleCook = this.handleCook.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipeInfo(this.props.id);
        this.props.getUserItems(this.props.userId);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearCurrentRecipeState();
    }

    handleCook() {
        let recipeItems = {};
        for (let i = 0; i < this.props.recipe.extendedIngredients.length; i++){
            let nameR = this.props.recipe.extendedIngredients[i].name;
            let amountR = this.props.recipe.extendedIngredients[i].amount;
            recipeItems[nameR] = amountR
        }
        let kitchenItemsArr = Object.values(this.props.items)
        for (let i = 0; i < kitchenItemsArr.length; i++) {
            let nameK = kitchenItemsArr[i].name;
            let amountK = kitchenItemsArr[i].quantity;
            if (recipeItems[nameK] && ((amountK - recipeItems[nameK])>=0)){
                let item = kitchenItemsArr[i];
                let newAmount = Math.floor(amountK - recipeItems[nameK]);
                item.quantity = newAmount.toString()
                this.props.editItem(item)
            }else{
                const error = document.querySelector('.not-enough')
                error.innerText = `Something's off (maybe rename an item in your kitchen? Maybe it's time for a Trader Joe's run?). Jump back to recipes and try again!`;
            }
        }
    }



    render() {
        if(this.props.recipe) {

            const filteredIngredients = this.props.recipe.extendedIngredients.filter(ingre => ingre.id !== null)

            return (
                <div className='show-recipe-container'>
                    <div className='recipe-box'>
                        <div className='show-recipe-card'>
                            <div className='image-box'>
                                <img src={this.props.recipe.image} alt="recipe"/>
                                    <a href={this.props.recipe.sourceUrl} className='more-info' rel='noopener noreferrer' target="_blank">For more information <GrNotes /></a> 
                            </div>
                            <div className='information-box'>
                                <div className='title'><span>Recipe Name: </span> {this.props.recipe.title} </div> 
                                <div className='time'><span>Cooking Time: </span>{this.props.recipe.readyInMinutes} minutes</div> 
                                <div className='instructions'><span>Instructions: </span> {this.props.recipe.instructions}</div>
                                <div className='ingredients'> <span>Required Ingredients: </span>  
                                    {filteredIngredients.map(ingre => 
                                        `${ingre.name} (${ingre.amount} ${ingre.amount===1?'item':'items'}), `)}
                                </div>
                                <div className='ingredients'> <span>Kitchen Ingredients: </span>
                                    {Object.values(this.props.items).map(item => `${item.name} (${item.quantity} ${item.quantity === 1 ? 'item':'items'}), `)}
                                </div>
                                <div className="not-enough"></div>
                                
                                <div className='btn-container'>
                                    <button onClick={this.handleCook} className='cook'>Cook this recipe</button>
                                    <button onClick={() => { this.props.history.push('/browse') }} className='jump-to-recipes'>Jump back to recipes</button>
                                </div>
                                <div className='empty-container'>
                                        {/* for extra space below */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Recipe;

