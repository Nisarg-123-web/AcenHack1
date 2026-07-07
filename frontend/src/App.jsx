import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoanApplication from "./pages/LoanApplication";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply" element={<LoanApplication />} />
    </Routes>
  );
}

export default App;