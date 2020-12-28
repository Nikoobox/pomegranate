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

## Models For a Smooth UI/UX

Out top priority was to make Pomegranate elegant and functional. Our edit item model and navigation drop-down menu utilize CSS positioning strategies to allow a user to easily interact with Pomegranate. Below, you can see how we allow a user to easily edit items in their kitchen and logout. To adjust items, we (short code walkthrough). As for the logout button, we (short code walkthrough).

![Models](extra_media/add_ingredients_gif.gif)

### Edit Item Model
```javascript
    render() {
        const customStyles = {
            control: base => ({
                ...base,
                border: 0,
                boxShadow: 'none',
            })
        };

        const options = [
            { label: "Fruits and vegetables", value: "Fruits and vegetables" },
            { label: "Dairy", value: "Dairy", className: 'custom-class' },
            { label: "Meat", value: "Meat" },
            { label: "Grains", value: "Grains" },
            { label: "Beverages", value: "Beverages" },
            { label: "Misc", value: "Misc" }]

        let disabled;

        if (this.state.name === "" || this.state.quantity === "" || this.state.type === "") {
            disabled = true;
        } else {
            disabled = false;
        }
        
        return (
            <div className="item-edit-page">
                <form onSubmit={this.handleSubmit} className='item-edit-form'>
                    <div className='close' onClick={() => this.props.closeModal()}><AiOutlineClose/></div>
                    <div className='welcome-message'>Edit Item Form</div>
                    <div className='label'>
                        Item name
                    </div> 
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder="Enter name"
                    />
                    <div className='label'>
                        Quantity
                    </div>
                    <input type="number"
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        placeholder="Enter quantity"
                    />
                    <div className='label'>
                        Expiration date
                    </div>
                    <input type="date"
                        value={this.state.expirationDate}
                        onChange={this.update('expirationDate')}
                        placeholder="Enter date"
                    />                  
                    <div className='label'>
                        Type
                    </div>    
                    <Select
                        styles={customStyles}
                        options={options}
                        placeholder={this.state.type === '' ? 'Select an item type' : this.state.type}
                        value={this.state.type}
                        onChange={this.updateType}
                    />
                    <input
                        type="submit"
                        value="Edit Item"
                        className='edit-item-btn-container'
                        disabled={disabled} />
                    
                    <div className='delete-item-btn-container'>
                        <button
                            onClick={this.handleDelete}
                            type="button"
                        >
                            Delete Item
                        </button>
                    </div>
                    {/* <div className='error-container'>
                        {this.renderErrors()}
                    </div> */}
                </form>
            </div>
        );
    }
```

### Logout Drop-Down
```javascript
    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='navbar'>
                    <Link to='/' className='navbar-logo-cont'>
                        <div className='logo-img'><img src={pom_logo}/></div>
                        <div className='logo-name'>Pomegranate</div>
                    </Link>
                    <div className='dropdown-container'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FaHamburger />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >My account</Dropdown.Item>
                            <LinkContainer to='/browse/contacts'>
                                <Dropdown.Item >Contacts</Dropdown.Item>
                            </LinkContainer>
                            <Dropdown.Item onClick={this.logoutUser} className='dropdown-logout'>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div> 
                </div>
            );
        } else {
            return (
                <div className='navbar'>
                    <Link to='/' className='navbar-logo-cont'>
                        <div className='logo-img'><img src={pom_logo} /></div>
                        <div className='logo-name'>Pomegranate</div>
                    </Link>
                    <Link to='/browse/contacts' className='navbar-about-cont'>
                        <div className='about'>Contacts</div>
                        
                    </Link>
                </div>
            );
        }
    }
```
