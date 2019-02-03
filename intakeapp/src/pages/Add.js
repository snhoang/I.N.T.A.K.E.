import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Add extends Component {
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
              {this.state.books.length ? (
                <List>
                  {/* {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))} */}
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