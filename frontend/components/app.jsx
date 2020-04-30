import React from "react";
import { provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import NavCategories from '../components/navCategories/navCategories';
import ProjectCategories from '../components/navCategories/projectCategories';
import ProjectIndexContainer from '../components/project_show/project_index_container';


const App = () => (
    <div>
        <header>
            <GreetingContainer />
        </header>
        <Route exact path="/" component={NavCategories}/>
        <Route exact path="/" component={ProjectCategories} />
        {/* <Route exact path="/" component={ProjectIndexContainer} /> */}
        
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;