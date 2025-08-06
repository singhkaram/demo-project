import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header/Index";
import Women from "./pages/Women";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
