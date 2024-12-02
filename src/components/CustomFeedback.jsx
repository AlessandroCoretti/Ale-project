import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";

class CustomFeedback extends Component {
  render() {
    return (
      <Container className="d-flex w-25">
        <Row id="row2">
          <div id="feedback" className="d-flex flex-column">
            <h4>Reviews</h4>

            <p>Select a book to find out what other think</p>

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
    );
  }
}

export default CustomFeedback;
