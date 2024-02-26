import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import Contact from "./components/Contact";
import DonateForm from "./components/DonateForm";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import InvitationForm from "./components/InvitationForm";
import MembersPage from "./components/MembersPage";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
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
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Routes>
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <Routes>
          <Route path="/invitation-form" element={<InvitationForm />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/donate" element={<DonateForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
