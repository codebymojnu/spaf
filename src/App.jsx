import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkingPrinciple from "./components/WorkingPrinciple";
import MembersPage from "./components/MembersPage";

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
      </Router>
    </div>
  );
}

export default App;
