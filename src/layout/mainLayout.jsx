import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const accessToken = loadState("user");
  if (!accessToken) {
    return <Navigate replace to={"/"} />;
  }
  return (
    <>
      <header className="bg-blue-500"></header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

