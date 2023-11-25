import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
  redirectTo: string;
  isAuth: boolean;
}

export const PublicRoute: FC<IPrivateRoute> = ({
  children,
  redirectTo,
  isAuth,
}) => {
  return isAuth ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
