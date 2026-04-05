import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Spells from "./pages/Spells";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/detail/:type/:index" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;