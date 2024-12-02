import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import "../../src/App.css";
import { Component } from "react";

import { Badge, Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    books: fantasy,
    selectedBook: null,
  };

  handleBookClick = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    const { books, selectedBook } = this.state;
    return (
      <>
        <div className="text-center my-4">
          <h1>I tuoi titoli preferiti</h1>
        </div>
        <Dropdown className="text-center mb-2">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
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
          </Dropdown.Menu>
        </Dropdown>
        <Container className="d-flex justify-content-between">
          <Row className="gy-3" id="row">
            <Col className="d-flex flex-wrap w-100">
              {books.map((book) => (
                <Col className="col-3" key={book.asin}>
                  <Card className="h-100" onClick={() => this.handleBookClick(book)}>
                    <Card.Img id="card-img" className="img-fluid" variant="top" src={book.img} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div id="title-book">
                        <Card.Title>{book.title}</Card.Title>
                      </div>
                      <div className="d-flex flex-column ">
                        <h5>
                          <Badge bg="primary"> {book.category}</Badge>
                        </h5>
                        <h5>
                          <Badge bg="success"> {book.price}$</Badge>
                        </h5>
                      </div>

                      <Button variant="danger">Add cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
          <Row id="row2">
            <div id="feedback" className="d-flex flex-column">
              <h4>Recensioni</h4>
              {selectedBook ? (
                <>
                  <h5>{selectedBook.title}</h5>

                  <p>{selectedBook.price || "nessuna recensione."}</p>
                </>
              ) : (
                <p>Seleziona un libro per vedere le recensioni</p>
              )}
              <Button variant="primary mx-auto">
                <div className="d-flex align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  <p className="m-0">Add to cart</p>
                </div>
              </Button>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
