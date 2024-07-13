import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
