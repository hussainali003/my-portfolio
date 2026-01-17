import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./page/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
