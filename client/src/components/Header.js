import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  ButtonGroup
} from 'reactstrap';

import CategoriesMenu from './CategoriesMenu';
import * as actions from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isNavbarOpen: false
    };
  }

  toggleNavbar() {
    this.setState(prevState => ({
      isNavbarOpen: !prevState.isNavbarOpen
    }));
  }

  renderAuthButtons() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button color="danger" tag={Link} to="/login">
            Se connecter
          </Button>
        );
      default:
        return (
          <UncontrolledDropdown>
            <DropdownToggle outline color="danger" caret>
              {this.props.auth.username}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Mon compte</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/api/logout">Déconnexion</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
    }
  }

  renderCategories() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return <CategoriesMenu />;
    }
  }

  render() {
    console.log(this.props);
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="isty.png" alt="Logo ISTY2" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isNavbarOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>{this.renderCategories()}</NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>{this.renderAuthButtons()}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
