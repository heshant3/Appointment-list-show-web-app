import React, { useState, useEffect } from "react";
import Appointment from "./Pages/Appointment";
import Preloader from "./Preloader";
import Nav from "./Nav";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <Preloader /> : <Nav />;
}

export default App;
