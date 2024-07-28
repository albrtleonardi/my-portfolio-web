import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./AnimRoutes";
import Header from "./layouts/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
  );
};

export default App;
