import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="mx-6 h-screen px-6">
      {isLoading && <Loader />}
      <Navbar />
      <main className="bg-slate-200">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
