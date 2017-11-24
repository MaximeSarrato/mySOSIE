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
  NavLink,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import * as actions from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isNavbarOpened: false,
      dropdownOpen: false
    };
  }

  toggleNavbar() {
    this.setState(prevState => ({
      isNavbarOpened: !prevState.isNavbarOpened
    }));
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
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
          <Button color="danger" href="/api/logout">
            Déconnexion
          </Button>
        );
    }
  }

  renderCategories() {
    switch (this.props.auth) {
      default:
        return (
          <div>
            <Button style={{ marginRight: '5px' }} color="secondary">
              Etudiants
            </Button>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
              style={{ marginRight: '5px' }}
              color="secondary"
            >
              <DropdownToggle caret>Promotions</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/promotions/list">
                  Lister
                </DropdownItem>
                <DropdownItem tag={Link} to="/promotions/create">
                  Créer une promotion
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button style={{ marginRight: '5px' }} color="secondary">
              UE
            </Button>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <Navbar color="faded" light expand="md">
          <NavbarBrand tag={Link} to="/">
            <img src="isty.png" alt="Logo ISTY" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isNavbarOpened} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>{this.renderCategories()}</NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>{this.renderAuthButtons()}</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
