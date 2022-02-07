import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import GameDetailPage from "./pages/gameDetailPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game/:id" exact element={<GameDetailPage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
