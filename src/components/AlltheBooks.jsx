import books from "../data/books/fantasy.json";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {books.map((book) => {
          <Col key={0}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>;
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
