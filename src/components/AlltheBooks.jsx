import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import "../../src/App.css";
import { Component } from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    books: fantasy,
  };

  render() {
    return (
      <>
        <div className="text-center my-4">
          <h1>I tuoi titoli preferiti</h1>
        </div>
        <div className="d-flex justify-content-center gap-2 mb-3">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            fantasy
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: history })}>
            history
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: horror })}>
            horror
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: romance })}>
            romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: scifi })}>
            scifi
          </Button>
        </div>
        <Container>
          <Row xs={1} md={4} xl={6} className="gy-3 w-100">
            {this.state.books.map((book) => (
              <Col key={book.asin}>
                <Card className="h-100">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Button variant="primary">{book.price}$</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
