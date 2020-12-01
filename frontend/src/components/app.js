import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import KitchenFormContainer from './kitchen/kitchen_form_container';

// const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'));
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })
// }

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/browse" component={KitchenFormContainer} />
        </Switch>
    </div>
);

export default App;