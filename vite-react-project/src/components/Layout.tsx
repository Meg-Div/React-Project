import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { LayoutProps } from "../state/ArtSlice";
import { Footer } from "./Footer";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </>
  );
}
