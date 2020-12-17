import React from 'react'
import {GrNotes} from 'react-icons/gr';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipeInfo(this.props.id)
        this.props.getUserItems(this.props.userId)
    }

    componentWillUnmount() {
        this.props.clearRecipeState();
    }

    handleClick() {
        if(this.props.items) {
            this.props.recipe.extendedIngredients.map(ingre => {
                Object.values(this.props.items).map( item =>{
                    // debugger;
                    if(ingre.name.includes(item.name) && item.quantity >= ingre.amount) {
                        // console.log('how much item was used for this recipe:', ingre.name, ingre.amount, 'amount we had in kitechn:', item.name, item.quantity)
                        item.quantity = `${item.quantity - ingre.amount}`
                        // console.log('how much left after cooking this recipe:', item.quantity)
                        
                    } else {
                        const error = document.querySelector('.not-enough')
                        error.innerText = 'Sorry, you do not have enoug inventory'
                    }
                    // debugger;
                    this.props.editItem(item)
                })
            })
            // this.setState({
            //     items: items
            // })
            // console.log(items)
        }
        // console.log(this.state)
    }

    render() {

        if(this.props.recipe)
            return (
            <div className='show-recipe-container'>
                <div className='show-recipe-card'>
                    <div className='image-box'>
                        <img src={this.props.recipe.image}/>
                            <a href={this.props.recipe.sourceUrl} className='more-info' rel='noopener noreferrer' target="_blank">For more information <GrNotes /></a> 
                    </div>
                    <div className='information-box'>
                        <div className='title'><span>Recipe Name: </span> {this.props.recipe.title} </div> 
                        <div className='time'><span>Cooking Time: </span>{this.props.recipe.readyInMinutes} minutes</div> 
                        <div className='instructions'><span>Instructions: </span> {this.props.recipe.instructions}</div> 
                        <h6 className="not-enough"></h6>
                        <button onClick={this.handleClick}>Cook this Recipe</button>
                        <button onClick={() => { this.props.history.push('/browse')}}>Jump back to recipes</button>
                    </div>

                </div>
            
            </div>
            )
    }
}

export default Recipe;

