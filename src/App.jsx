import React from "react";
import Navbar from "./components/mainheader/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoute } from "./UI/routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {appRoute.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
