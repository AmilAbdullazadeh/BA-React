import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormComponent extends Component {
  state = {
    userName: "",
    email: "",
    city: [],
    description: "",
  };

  onChangeHandler = (event) => {
    // this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    alertify.success(this.state.userName);
    alertify.success(this.state.email);
    alertify.success(this.state.city);
    alertify.success(this.state.description);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="mt-4">
        <FormGroup>
          <Label for="userName">User Name</Label>
          <Input
            onChange={this.onChangeHandler}
            type="text"
            name="userName"
            id="userName"
            placeholder="User Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={this.onChangeHandler}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            onChange={this.onChangeHandler}
            type="select"
            name="city"
            id="city"
          >
            <option>Baku</option>
            <option>Gakh</option>
            <option>Gabala</option>
            <option>Naxchivan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            onChange={this.onChangeHandler}
            type="textarea"
            name="description"
            id="description"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default FormComponent;
