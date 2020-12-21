![Pomegranate Banner](extra_media/welcome_page.png)
<div align="center">
  <a href="https://aapomegranate.herokuapp.com/">Live Site</a>
</div>
          
          
Let Pomegranate help you discover exciting new meals you can create with the ingredients you already have. Give us an idea of what you've got to work with and let Pomegranate do the rest! Convenient, green, accessable. Pomegranate.


# Background and Overview

If given a choice between a healthy, convenient, delicious home-cooked meal and eating out, most American's would choose the former. COVID has dramatically accelerated this movement. Even people who didn't have an interest in cooking find themselves subscribing to meal kits and learning how to cook a meal. It's become a necessity. However most people find themselves wasting almost 40% of everything they buy because they don't know what to do with it. Why bother finding a recipe to cook that leftover tomoato from yesterday's stew and the asperagas you only bought because it was on sale at Trader Joe's. This app takes the hard work out of the equation by suggesting exciting ways to prepare those leftovers you might otherwise throw out.

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


## MongoDB and Express

Here, we stored all user login information, their kitchen info, and all ingredients in their kitchen. When they input each ingredient, we keep track of which items have expired and display them in red in the kitchen show page. We also allow a user to update each ingredients information in an ingredient show page. 

![User Auth Demo](extra_media/login_gif.gif)

## React, Redux, Node

We created smooth, clean modals to input user and ingredient data. We also used it to create get requests to our Spoonacular and Google APIs and then display that information in meaningful, user-friendly ways. We can suggest recipes the user can use based on the ingredients in their kitchen, show each recipe in greater detail, and even locate nearby grocery stores with Google Maps if a user is missing any ingredients for a suggested recipe. We even keep track of each ingredient's expiration date and show it in red if it has expired.

![Pomegranate Banner](extra_media/add_ingredients_gif.gif)

## Styling

Pomegranate top priority is to make an app elegant looking and functional. Home page utilized CSS positioning strategy to add beautiful background image.
### Home Page
```
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
```
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
### Colors Variables
We used colors variables to experiment with overall website look. 

```
$mainGrey: #333333;
$lightGreyPlaceholder: #9a9a9a;
$mainRed: #a1272e;
$mainLightRed: #eed9d0;
$mainGreen:#446c49;
$Greenish:#498586;
$lightGreenCards: #89bbc0;
$darkGreenCards: #437a80;
$GreenishDark:#091617;
$mainYellow:#f7dca5;
$mainYellowLignt:#f7f6f3;
```
