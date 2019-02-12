import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login";
import Signup from "../components/Signup";
import loginAPI from "../API/login"; // this one accepts two parameters (email and password)
import signupAPI from "../API/signup"; // this one accepts three parameters (name, email and password)


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

  submitLoginInformationToLoginApi = (e) => {
    e.preventDefault()
    // obtain value of email and password from form
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    // pass email and password to login api
    loginAPI(email, password)
  }

  submitSignupInformationToSignupApi = (e) => {
    e.preventDefault()
    const name = document.querySelector("#signupName").value
    const email = document.querySelector("#signupEmail").value
    const password = document.querySelector("#signupPassword").value

    // pass name, email, and passowrd to signup api
    signupAPI(name, email, password)
  }

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
              <Login
                submitLoginInformationToLoginApi={this.submitLoginInformationToLoginApi}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Sign Up" icon="">
              <Signup
                handleInputChange={this.handleInputChange}
                submitSignupInformationToSignupApi={this.submitSignupInformationToSignupApi}
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