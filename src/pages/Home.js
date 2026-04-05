import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/hogwarts.png";
import "../App.css";
import bgBooks from "../assets/books.png";
import bgCharacters from "../assets/characters.png";
import bgHouses from "../assets/houses.png";
import bgSpells from "../assets/spells.png";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    [bgBooks, bgCharacters, bgHouses, bgSpells].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay fade-in">
        <h1 className="title">Welcome to Hogwarts</h1>
        <p className="subtitle">Explore Books, Characters, Houses and Spells</p>

        <div className="btn-group-home">
          <button onClick={() => navigate("/books")}>
            Books
          </button>

          <button onClick={() => navigate("/characters")}>
            Characters
          </button>

          <button onClick={() => navigate("/houses")}>
            Houses
          </button>

          <button onClick={() => navigate("/spells")}>
            Spells
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;