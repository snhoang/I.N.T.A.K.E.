import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import getNutrients from "./../API/getnutrients.js"


class Add extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    getNutrients();
  }

  getLoggedDrinks = () => {
    getNutrients.getLoggedDrinks()
      .then(res =>
        this.setState({
          drinks: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>What's your poison?</strong>
              </h1>
              <h2 className="text-center">Log in your drinks below...</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="i.n.t.a.k.e. Log" icon="fas fa-plus-circle">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Recently Logged Drinks" icon="">
              {this.state.drinks.length ? (
                <List>
                </List>
              ) : (
                  <h2 className="text-center">No drinks?! You must be thirsty AF.</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Add;