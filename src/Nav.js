import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import NotFound from "./NotFound";

function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appointment />} />
        {/* Other routes go here */}

        {/* 404 Route - should be the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Nav;
