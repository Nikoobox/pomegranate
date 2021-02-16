import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import Footer from "./footer/footer";
import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ItemIndexContainer from "./item/item_index_container";
import RecipeContainer from "./recipe/recipe_container";
import MapContainer from "./googlemaps/map_container";
import PageNotFound from "./page_not_found/page_not_found";
import Modal from './item_edit/modal';
import Contact from "./contact/contact";


const App = () => (
  <div>
    <Modal/>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/googlemap" component={MapContainer} />
      <ProtectedRoute exact path="/browse" component={ItemIndexContainer} />
      <Route exact path="/browse/contacts" component={Contact} />
      <ProtectedRoute exact path="/browse/:recipeId" component={RecipeContainer} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
