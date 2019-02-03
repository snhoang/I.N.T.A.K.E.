import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Dashboard extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // getBooks = () => {
  //   API.getBooks(this.state.q)
  //     .then(res =>
  //       this.setState({
  //         books: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         books: [],
  //         message: "No New Books Found, Try a Different Query"
  //       })
  //     );
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getBooks();
  // };

  // handleBookSave = id => {
  //   const book = this.state.books.find(book => book.id === id);

  //   API.saveBook({
  //     googleId: book.id,
  //     title: book.volumeInfo.title,
  //     subtitle: book.volumeInfo.subtitle,
  //     link: book.volumeInfo.infoLink,
  //     authors: book.volumeInfo.authors,
  //     description: book.volumeInfo.description,
  //     image: book.volumeInfo.imageLinks.thumbnail
  //   }).then(() => this.getBooks());
  // };

  render() {
    return (
      <Container>

        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="text-center">
                <strong>alcohol intake</strong>
              </h1>
              <h2 className="text-center">
                (insert daily stats here)
                <br></br>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary">
                  see details
              </button>
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="text-center">
                <strong>caffeine intake</strong>
              </h1>
              <h2 className="text-center">
                (insert daily stats here)
                <br></br>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary">
                  see details
              </button>
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="text-center">
                <strong>sugar intake</strong>
              </h1>
              <h2 className="text-center">
                (insert daily stats here)
                <br></br>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary">
                  see details
              </button>
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="text-center">
                <strong>drink something recently?</strong>
                <br></br>
                <br></br>
                <a href="/add">
                  <button
                    type="submit"
                    className="btn btn-lg btn-danger">
                    + beverage(s)
                  </button>
                </a>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Dashboard;
