import { useNavigate } from "react-router-dom";
import bg from "../assets/hogwarts.png";
import "../App.css";
import bgBooks from "../assets/books.png";
import bgCharacters from "../assets/characters.png";
import bgHouses from "../assets/houses.png";
import bgSpells from "../assets/spells.png";

useEffect(() => {
  [bgBooks, bgCharacters, bgHouses, bgSpells].forEach(src => {
    const img = new Image();
    img.src = src;
  });
}, []);

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay fade-in">
        <h1 className="title">Welcome to Hogwarts</h1>
        <p className="subtitle">Explore Books, Characters, Houses and Spells</p>

        <div className="btn-group-home">
          <button onClick={() => navigate("/books")}>
            <i className="bi bi-book"></i> Books
          </button>

          <button onClick={() => navigate("/characters")}>
            <i className="bi bi-people"></i> Characters
          </button>

          <button onClick={() => navigate("/houses")}>
            <i className="bi bi-house"></i> Houses
          </button>

          <button onClick={() => navigate("/spells")}>
            <i className="bi bi-stars"></i> Spells
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;