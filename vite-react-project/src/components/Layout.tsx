import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { LayoutProps } from "../state/ArtSlice";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
    </>
  );
}
