import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./route";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading</h1>}>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
