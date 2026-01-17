import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./page/home";
import Project from "./page/project";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path={`/project/:name`} element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
