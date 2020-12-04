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

    componentWillUnmount() {
        this.props.clearRecipeState();
    }

    render() {
        
        if(this.props.recipe)
            return (
            <div className='show-recipe-container'>
                <div className='show-recipe-card'>
                    <div className='image-box'>
                        <img src={this.props.recipe.image}/>
                        <a href={this.props.recipe.sourceUrl} className='more-info'>For more information <GrNotes /></a> 
                    </div>
                    <div className='information-box'>
                        {/* <a href={this.props.recipe.sourceUrl}>For more information <GrNotes/></a>  */}
                            <div className='title'><span>Recipe Name: </span> {this.props.recipe.title} </div> 
                        <div className='time'><span>Cooking Time: </span>{this.props.recipe.readyInMinutes} minutes</div> 
                        <div className='instructions'><span>Instructions: </span> {this.props.recipe.instructions}</div> 

                    </div>

                </div>
            
            </div>
            )
    }
}

export default Recipe;

