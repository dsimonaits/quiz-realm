import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../styles/theme/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
