// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#063826]">
      {/* Fixed Header */}
      <Header />

      {/* Page Content (offset for fixed header) */}
      <main className="flex-1 pt-[80px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
