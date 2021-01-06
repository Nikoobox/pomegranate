import React from 'react'
import {GrNotes} from 'react-icons/gr';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipeInfo(this.props.id);
        this.props.getUserItems(this.props.userId);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearCurrentRecipeState();
    }


    render() {
        
        if(this.props.recipe) {

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
                                <div> Required Ingredients: 
                                    {this.props.recipe.extendedIngredients.map(ingre => `${ingre.name} - ${ingre.amount},`)}
                                </div>
                                <div> Items in kitchen: 
                                    {Object.values(this.props.items).map( item => `${item.name} - ${item.quantity}, please update inventory manually`)}
                                </div>
                                <div className='btn-container'>
                                    <button onClick={this.handleClick} className='cook'>Cook this recipe</button>
                                    <button onClick={() => { this.props.history.push('/browse') }} className='jump-to-recipes'>Jump back to recipes</button>
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

