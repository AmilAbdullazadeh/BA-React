import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div>
          <h3> {this.props.info.title} - { this.props.currentCategory } </h3>
        </div>
      </div>
    );
  }
}

export default ProductList;
