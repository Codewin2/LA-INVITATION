import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function WeddingLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}