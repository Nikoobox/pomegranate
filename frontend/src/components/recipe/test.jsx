import React from 'react'
import { GrNotes } from 'react-icons/gr';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipeInfo(this.props.id)
        // debugger;
        this.props.getUserItems(this.props.userId);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearRecipeState();
    }

    handleClick() {
        if (this.props.items) {




            this.props.recipe.extendedIngredients.map(ingre => {

                Object.values(this.props.items).map(item => {

                    if (ingre.name.includes(item.name) && item.quantity >= ingre.amount) {
                        const cooked = document.querySelector('.cooked')
                        let word;
                        if (ingre.amount >= 2) {
                            word = 'portions'
                        } else {
                            word = 'portion'
                        }
                        cooked.innerText = `You used ${ingre.amount} ${word} of ${ingre.name} from your kitchen`
                        item.quantity = `${item.quantity - ingre.amount}`

                    } else if (ingre.name.includes(item.name) && item.quantity < ingre.amount) {
                        const error = document.querySelector('.not-enough')
                        error.innerText = `Sorry, you do not have enough ${item.name}, you need at least ${ingre.amount}`
                    } else {
                        const warning = document.querySelector('.warning')
                        warning.innerText = `${ingre.name} is missing from kitchen`
                    }
                    this.props.editItem(item)
                })
            })
        }
    }

    render() {

        if (this.props.recipe)
            return (
                <div className='show-recipe-container'>
                    <div className='recipe-box'>
                        <div className='show-recipe-card'>
                            <div className='image-box'>
                                <img src={this.props.recipe.image} />
                                <a href={this.props.recipe.sourceUrl} className='more-info' rel='noopener noreferrer' target="_blank">For more information <GrNotes /></a>
                            </div>
                            <div className='information-box'>
                                <div className='title'><span>Recipe Name: </span> {this.props.recipe.title} </div>
                                <div className='time'><span>Cooking Time: </span>{this.props.recipe.readyInMinutes} minutes</div>
                                <div className='instructions'><span>Instructions: </span> {this.props.recipe.instructions}</div>

                                <div className="cooked"></div>
                                <div className="not-enough"></div>
                                <div className="warning"></div>
                                <div className='btn-container'>
                                    <button onClick={this.handleClick} className='cook'>Cook this recipe</button>

                                    <button onClick={() => { this.props.history.push('/browse') }} className='jump-to-recipes'>Jump back to recipes</button>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            )
    }
}

export default Recipe;




// Just for our own sanity:

// handleCook() {
//     let recipeItems = {};
//     let kitchenItems = {};
//     this.props.recipe.extendedIngredients.map((ingre) => {
//     recipeItems[ingre.name] = ingre.amount;
//     console.log(this.props.recipe.extendedIngredients)
//         }) 
// }