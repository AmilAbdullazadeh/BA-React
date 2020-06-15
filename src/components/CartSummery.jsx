import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

class CartSummery extends Component {
  render() {
    return (
      <div>
        <div>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Your cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
              {this.props.cart.map((cartItem) => (
                <DropdownItem key={cartItem.product.id}>
                  <Badge
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                    className="mr-2"
                    color="danger"
                  >
                    X
                  </Badge>
                  {cartItem.product.productName}
                  <Badge className="ml-2" color="success">
                    {cartItem.quantity}
                  </Badge>
                </DropdownItem>
              ))}
              <DropdownItem divider />
              <DropdownItem>
                <Link to="cart"> Go to cart </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    );
  }
}

export default CartSummery;
