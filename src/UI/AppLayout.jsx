import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <Navbar />
      <main className="mx-4 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
