import React from 'react'
import {GrNotes} from 'react-icons/gr';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchRecipeInfo(this.props.id)
    }
    render() {
        // const ingres = this.props.recipe.extendedIngredients.map(ingre => {
        //     return <img src={ingre.image} alt="ingre"/>
        // })
        if(this.props.recipe)
            return (
            <div>
                <img src={this.props.recipe.image} alt="image"/>
                <a href={this.props.recipe.sourceUrl}>For more information <GrNotes/></a> 
                <p>Cooking Time:{this.props.recipe.readyInMinutes} minutes</p> 
                <p>Instructions:{this.props.recipe.instructions}</p> 
            
            </div>
            )
    }
}

export default Recipe;