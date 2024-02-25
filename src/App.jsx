import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import MembersPage from "./components/MembersPage";
import Navbar from "./components/Navbar";
import WorkingPrinciple from "./components/WorkingPrinciple";

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
        <Routes>
          <Route path="/working-principle" element={<WorkingPrinciple />} />
        </Routes>
        <Routes>
          <Route path="/members" element={<MembersPage />} />
        </Routes>
        <Routes>
          <Route path="/gallary" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
