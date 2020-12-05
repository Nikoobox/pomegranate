import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import Footer from "./footer/footer";
import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ItemIndexContainer from "./item/item_index_container";
import ItemEditContainer from "./item_edit/item_edit_container";
import RecipeContainer from "./recipe/recipe_container";
import Map from "./googlemaps/map";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/googlemap" component={Map} />
      <ProtectedRoute exact path="/browse" component={ItemIndexContainer} />
      <ProtectedRoute exact path="/item/:itemId/edit" component={ItemEditContainer}/>
      <ProtectedRoute exact path="/:recipeId" component={RecipeContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
