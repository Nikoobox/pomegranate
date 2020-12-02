import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
<<<<<<< HEAD:frontend/src/components/app.js
import KitchenFormContainer from './kitchen/kitchen_form_container';
import ItemIndexContainer from './item/item_index_container';
import ItemShow from './item/itemshow';



const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/browse" component={KitchenFormContainer} />
      <ProtectedRoute path="/browse" component={KitchenFormContainer} />
      <ProtectedRoute exact path="/:kitchenId/items" component={ItemIndexContainer} />
      <ProtectedRoute exact path="/:itemId" component={ItemShow} />
    </Switch>
  </div>
=======
import KitchenFormContainer from './kitchen_form/kitchen_form_container';
import UserKitchensContainer from './user_kitchens/user_kitchens_container';





const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/browse" component={KitchenFormContainer} />

        </Switch>
    </div>
>>>>>>> master:frontend/src/components/app.jsx
);

export default App;