import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import bgBooks from "../assets/books.png";
import bgCharacters from "../assets/characters.png";
import bgHouses from "../assets/houses.png";
import bgSpells from "../assets/spells.png";

function Detail() {
  const { type, index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(location.state?.data || null);

  useEffect(() => {
    if (!data) {
      fetch(`https://potterapi-fedeperin.vercel.app/en/${type}`)
        .then(res => res.json())
        .then(result => setData(result[index]));
    }
  }, [data, type, index]);

  const backgrounds = {
    books: bgBooks,
    characters: bgCharacters,
    houses: bgHouses,
    spells: bgSpells
  };

  if (!data) return null;

  return (
    <div
      className="detail-page"
      style={{ backgroundImage: `url(${backgrounds[type]})` }}
    >
      <div className="detail-overlay">
        <Button className="back-btn" onClick={() => navigate(-1)}>← Back</Button>

        <Container>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <Card className={`glass-card ${
              type === "characters" ? "glass-character" :
              type === "spells" ? "glass-spell" :
              type === "books" ? "glass-book" : ""
            }`}>
              <Card.Body>

                {(data.image || data.cover) && (
                  <img
                    src={data.image || data.cover}
                    alt="detail"
                    className="detail-image"
                  />
                )}

                <h2 className="detail-title">
                  {data.fullName || data.title || data.house || data.spell}
                </h2>

                {Object.keys(data).map((key) => (
                  key !== "image" &&
                  key !== "cover" && (
                    <p key={key} className="detail-text">
                      <b>{key} :</b>{" "}
                      {Array.isArray(data[key])
                        ? data[key].join(", ")
                        : data[key]}
                    </p>
                  )
                ))}

              </Card.Body>
            </Card>
          </motion.div>
        </Container>

      </div>
    </div>
  );
}

export default Detail;