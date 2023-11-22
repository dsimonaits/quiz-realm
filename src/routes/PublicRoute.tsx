import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";

interface IPrivateRoute {
  children: React.ReactNode;
  redirectTo: string;
}

export const PublicRoute: FC<IPrivateRoute> = observer(
  ({ children, redirectTo }) => {
    console.log(UserStore.isAuthenticated);
    const isAuthenticated = UserStore.isAuthenticated;
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
  }
);

export default PublicRoute;
