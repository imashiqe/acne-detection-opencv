import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UploadForm from "./components/UploadForm";
import ScanHistory from "./components/ScanHistory";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/history" element={<ScanHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
