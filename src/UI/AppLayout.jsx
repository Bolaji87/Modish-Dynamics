import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex min-h-[100dvh] flex-col px-0">
      <Header />
      <main className="flex-grow dark:bg-gray-900 dark:text-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
