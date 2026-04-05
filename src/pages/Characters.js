import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/characters.png";

function Characters() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/characters")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div className="page-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-overlay">
        <Button className="back-btn" onClick={() => navigate(-1)}>← Back</Button>

        <Container>
          <h1 className="page-title">Hogwarts Characters</h1>

          <Row className="justify-content-center">
            {data.map((item, index) => (
              <Col key={index} xs={12} md={6} className="d-flex justify-content-center mb-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="glass-card glass-character character-card">
                    <img
                      src={item.image || "https://via.placeholder.com/110x140"}
                      alt={item.fullName}
                      className="character-img"
                    />

                    <div className="character-body">
                      <h5 className="character-title">{item.fullName}</h5>

                      <Button
                        as={Link}
                        to={`/detail/characters/${index}`}
                        state={{ data: item }}
                        className="magic-btn"
                      >
                        View Detail
                      </Button>
                    </div>
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

export default Characters;