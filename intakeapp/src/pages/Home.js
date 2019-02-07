import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login";
import Signup from "../components/Signup";

class Home extends Component {
  state = {
    books: []
  };

  // componentDidMount() {
  //   this.getSavedBooks();
  // }

  // getSavedBooks = () => {
  //   API.getSavedBooks()
  //     .then(res =>
  //       this.setState({
  //         books: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleBookDelete = id => {
  //   API.deleteBook(id).then(res => this.getSavedBooks());
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>i.n.t.a.k.e.</strong>
              </h1>
              <h2 className="text-center">"...inner nutrition tracker and knowledge explosion."</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Login" icon="">
              <Login></Login>
              <div className="text-center pull-right">
                <a href="/dashboard">
                  <button
                    type="submit"
                    className="btn btn-lg btn-danger">
                    Login
                  </button>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Sign Up" icon="">
              <Signup
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;