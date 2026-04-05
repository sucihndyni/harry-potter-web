import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/spells.png";

function Spells() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/spells")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div className="page-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-overlay">
        <Button className="back-btn" onClick={() => navigate(-1)}>← Back</Button>

        <Container>
          <h1 className="page-title">Magic Spells</h1>

          <Row>
            {data.map((item, index) => (
              <Col md={3} key={index} className="mb-3">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="glass-card glass-spell spell-card">
                    <Card.Body>
                      <Card.Title className="spell-title">
                        {item.spell}
                      </Card.Title>

                      <Button
                        as={Link}
                        to={`/detail/spells/${index}`}
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

export default Spells;