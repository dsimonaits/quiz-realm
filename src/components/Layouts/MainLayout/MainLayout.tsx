import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Divider } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Divider mt="10px" />
    </>
  );
};

export default MainLayout;
