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
import Map from "./googlemaps/map";
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
      <AuthRoute exact path="/testing" component={PageNotFound} />
      <ProtectedRoute exact path="/googlemap" component={MapContainer} />
      <ProtectedRoute exact path="/browse" component={ItemIndexContainer} />
      {/* <ProtectedRoute exact path="/item/:itemId/edit" component={ItemEditContainer}/> */}
      <ProtectedRoute exact path="/:recipeId" component={RecipeContainer} />
      <AuthRoute exact path="/about" component={ Contact } />
    </Switch>
    <Footer />
  </div>
);

export default App;
