import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import "../../src/App.css";
import { Component } from "react";

import { Badge, Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import CustomFeedback from "./CustomFeedback";

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
          <h1>Browse through the titles you prefer</h1>
        </div>
        <Dropdown className="text-left mb-4 ms-3">
          <Dropdown.Toggle id="dropdown-basic">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="d-flex justify-content-center gap-2 mx-2">
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
          <CustomFeedback />
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
