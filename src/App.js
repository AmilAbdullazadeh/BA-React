import React, { Component } from "react";
import Navi from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Cartist from "./components/CartList";
import NotFound from "./components/NotFound";
import FormComponent from "./components/FormComponent";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    categories: [],
    currentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  onChange = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    console.info(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  };

  getCategories = () => {
    let url = "http://localhost:3000/categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedCart = newCart.find((c) => c.product.id === product.id);
    if (addedCart) {
      addedCart.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart", 2);
  };

  render() {
    let categoryInfo = { title: "Category title" };
    let productInfo = { title: "Product title" };

    return (
      // jsx
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="5" sm="6" md="5" lg="4">
              <CategoryList
                categories={this.state.categories}
                changeCategory={this.onChange}
                info={categoryInfo}
              />
            </Col>
            <Col xs="7" sm="6" md="7" lg="8">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      info={productInfo}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <Cartist
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route exact path="/form" component={FormComponent} />
                <Route component={NotFound} />
              </Switch>
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
