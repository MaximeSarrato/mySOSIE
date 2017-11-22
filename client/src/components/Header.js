import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
        );
      default:
        return <a href="/api/logout">Déconnexion</a>;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal darken-3">
          <Link to="/" className="brand-logo">
            ISTY
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
