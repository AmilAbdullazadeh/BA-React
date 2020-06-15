import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummery from "../components/CartSummery";

class Navi extends Component {
  renderCartSummery = () => {
    return (
      <CartSummery
        removeFromCart={this.props.removeFromCart}
        cart={this.props.cart}
      />
    );
  };

  renderEmptyCart = () => {
    return (
      <NavItem>
        <NavLink>Your cart is empty</NavLink>
      </NavItem>
    );
  };

  render() {
    return (
      <div>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="form">Form</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  {this.props.cart.length > 0
                    ? this.renderCartSummery()
                    : this.renderEmptyCart()}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navi;
