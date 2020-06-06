import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Test1" },
      { categoryId: 2, categoryName: "Test2" },
      { categoryId: 3, categoryName: "Test3" },
    ],
    currentCategory: "",
  };

  onChange = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let categoryInfo = { title: "Category title" };
    let productInfo = { title: "Product title" };

    return (
      // jsx
      <div>
        <Container>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col xs="5" sm="6" md="5" lg="4">
              <CategoryList
                categories={this.state.categories}
                changeCategory={this.onChange}
                info={categoryInfo}
              />
            </Col>
            <Col xs="7" sm="6" md="7" lg="8">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// Components
// 1. Function Components
// 2. Class Components
// 3. Hooks Comonents - react 16.8

export default App;
