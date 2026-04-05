import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/houses.png";

import gryffindor from "../assets/gryffindor.png";
import slytherin from "../assets/slytherin.png";
import ravenclaw from "../assets/ravenclaw.png";
import hufflepuff from "../assets/hufflepuff.png";

function Houses() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const houseImages = {
    gryffindor,
    slytherin,
    ravenclaw,
    hufflepuff
  };

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/houses")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div className="page-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-overlay">
        <Button className="back-btn" onClick={() => navigate(-1)}>← Back</Button>

        <Container>
          <h1 className="page-title">Hogwarts Houses</h1>

          <Row className="justify-content-center">
            {data.map((item, index) => (
              <Col md={5} key={index} className="mb-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <Card
                    className={`glass-card house-card text-center ${item.house.toLowerCase()}`}
                    style={{
                      backgroundImage: `url(${houseImages[item.house.toLowerCase()]})`
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="house-title">
                        {item.house}
                      </Card.Title>

                      <Button
                        as={Link}
                        to={`/detail/houses/${index}`}
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

export default Houses;