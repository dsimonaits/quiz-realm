import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";

interface IPrivateRoute {
  children: React.ReactNode;
  redirectTo: string;
}

export const PrivateRoute: FC<IPrivateRoute> = observer(
  ({ children, redirectTo }) => {
    const isAuthenticated = UserStore.isAuthenticated;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }
);

export default PrivateRoute;
