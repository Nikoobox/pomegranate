import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import KitchenFormContainer from './kitchen_form/kitchen_form_container';
import UserKitchensContainer from './user_kitchens/user_kitchens_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/browse" component={KitchenFormContainer} />
            <ProtectedRoute path="/kitchens" component={UserKitchensContainer} />
        </Switch>
    </div>
);

export default App;