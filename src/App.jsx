import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoPage from "./components/LogoPage";
import FileUploadPage from "./components/FileUploadPage";
import LiveVoicePage from "./components/LiveVoicePage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">🏢 Company</Link>
        <Link to="/upload">📤 Upload Audio</Link>
        <Link to="/live">🎤 Live Voice</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/live" element={<LiveVoicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
