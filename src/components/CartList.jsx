import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class CartList extends Component {
  render() {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.categoryId}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                    color="danger"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CartList;
