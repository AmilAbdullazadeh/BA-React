import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <div>
          <h3> {this.props.info.title} </h3>
          <ListGroup>
            {this.props.categories.map((category) => (
              <ListGroupItem
                onClick={() => this.props.changeCategory(category)}
                key={category.categoryId}
              >
                {category.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default CategoryList;
