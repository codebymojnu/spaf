import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
