import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import StudentCreationForm from './forms/StudentCreationForm';
import PromotionCreationForm from './forms/PromotionCreationForm';
import PromotionList from './PromotionList';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); // Check if the user is logged in
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route
              exact
              path="/students/create"
              component={StudentCreationForm}
            />
            <Route
              exact
              path="/promotions/create"
              component={PromotionCreationForm}
            />
            <Route exact path="/promotions/list" component={PromotionList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
