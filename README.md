![Pomegranate Banner](extra_media/welcome_page.png)
<div align="center">
  <a href="https://aapomegranate.herokuapp.com/">Live Site</a>
</div>
          
          
Let Pomegranate help you discover exciting new meals you can create with the ingredients you already have. Give us an idea of what you've got to work with and let Pomegranate do the rest! Convenient, green, accessable. Pomegranate.


# Background and Overview

If given a choice between a healthy, convenient, delicious home-cooked meal and eating out, most Americans would choose the former. COVID has dramatically accelerated this movement. Even people who didn't have an interest in cooking find themselves subscribing to meal kits and learning how to cook a meal. It has become a necessity. However most people find themselves wasting almost 40% of everything they buy because they don't know what to do with it. This app takes the hard work out of the equation by suggesting exciting ways to prepare those leftovers you might otherwise throw out.

# Technologies Stack

* MongoDB
* NoSQL Database
* Javascript
* React/Redux
* Google Maps Javascript API
* Spoonacular API

# Functionality and MVP

* Complete User Authentication Experience
* Kitchen Inventory Management
* Generate Recipes Based on Inventory
* Locate Nearby Grocery Stores

# Technologies and Challenges


## User Authentication

(Here, we stored all user login information, their kitchen info, and all ingredients in their kitchen. When they input each ingredient, we keep track of which items have expired and display them in red in the kitchen show page. We also allow a user to update each ingredient's information in an ingredient show page.)-not sure if this goes here

Visitors are prompted to sign up or log in to access content. 
Site utilizes BCrypt for password security.
Validation errors are displayed when the user rpovides wrong credentials.

![User Auth Demo](extra_media/login_demo.gif)

## Kitchen Inventory
(Pomegranate pulls infromation from the Spoonacular and Google APIs and then displays that information in meaningful, user-friendly ways. We suggest recipes the user can make based on the ingredients in their kitchen, show each recipe in greater detail, and even locate nearby grocery stores with Google Maps if a user is missing any ingredients for a suggested recipe. We even keep track of each ingredient's expiration date and display it in red if it has expired.)

After loggin in or signin up, the users add items with 'Add Item Form', where they are required to enter the name, quantity, expiration date and item type. We keep track of which items have expired and display them in red in the kitchen show page. We also allow a user to update each ingredient's information by utilizing 'edit' modal.

![Pomegranate Banner](extra_media/walkthrough.gif)

## Recipe Generator
After adding the items, the users can click 'Generate Recipe' button. Pomegranate pulls infromation from the Spoonacular then displays that information in meaningful, user-friendly ways. We suggest recipes the user can make based on the ingredients in their kitchen, show each recipe in greater detail, and even locate nearby grocery stores with Google Maps if a user is missing any ingredients for a suggested recipe. We even keep track of each ingredient's expiration date and display it in red if it has expired. If the recipe is cooked, items quantity is adjusted accordingly and the 'low inventory warning' is displayed if applicable

## Google Maps
Google Maps APi is used to locate nearby grocery stores if a user is missing any ingredients for a suggested recipe. 

## Modals
Below, you can see how we allow a user to easily edit items in their kitchen. This modal, like our user login demonstrated above, allows for a smooth UI/UX. Here, we render edit container based on the modal 'edit' type under case 'edit'. In a future, more cases could be added under the switch if needed. Modal will be closed if the user either clicks outside of the form or on 'X'. 

![Edit Item Model](extra_media/model_demo.gif)

```javascript
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
//*********** YOU HAVE ACCESS TO THE USER ID USING modal.userId ****************//
    switch (modal.modal) {
        case 'edit':
            component = <ItemEditContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {
            dispatch(closeModal());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
```
## Styling

Out top priority was to make Pomegranate elegant and functional. Our home page utilizes CSS positioning strategies to add a beautiful background image.
### Home Page
```javascript
.splash-container{
    height:100vh;
    width:100%;
    position:relative;
} 
.splash-container::before{
    content:'';
    position:absolute;
    background-image: url(../../images/back3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;;
    opacity:0.4;
    width : 100%;
    height: 100%
}
```
We used SCSS throught the project for better CSS structuring and readability. Smooth transitions were used for every hover effect and modal.

### Recipes Section
```javascript
.recipes-container{
    width:100%;
    margin:50px 0;
    .fetch-rec-button-box{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom:70px;
        button{
            padding:10px;
            border-radius:30px;
            border:2px solid $mainRed;
            background:white;
            transition: ease-out all 0.2s;
            color:$mainRed;
            font-size:18px;
            &:hover{
                background: $mainRed;
                color:white;
                border: 2px solid $mainRed;
                cursor:pointer;
            }
        }
    }
    .recipes-box{
        margin: 0 100px;
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        justify-content: space-between;
        .recipe-card{
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 5px;
            width:20%;
            margin:20px;
            .recipe-image-box{
                width:100%;
                img{
                    width:100%;
                    position:top;
                    object-fit: cover;
                }

            }
            .card-info{
                padding:10px;
                .recipe-title-box{
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                .from-kitchen-box{
                    margin-bottom:5px;
                    .kitchen-item-yes{
                        color:$mainGreen;
                        font-size:16px;
                    }
                }
                .missing-items-box{
                    .kitchen-item-no{
                        color:$mainRed;
                        font-size:16px;
                    }
                }
            }
        }
    }
}
```
