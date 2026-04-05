import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/books.png";

function Books() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/books")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div className="page-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-overlay">
        <Button className="back-btn" onClick={() => navigate(-1)}>← Back</Button>

        <Container>
          <h1 className="page-title">Hogwarts Books</h1>

          <Row>
            {data.map((item, index) => (
              <Col md={3} key={index} className="mb-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="glass-card glass-book book-card">
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Button
                        as={Link}
                        to={`/detail/books/${index}`}
                        state={{ data: item }}
                        className="magic-btn"
                      >
                        View Detail
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

        </Container>
      </div>
    </div>
  );
}

export default Books;