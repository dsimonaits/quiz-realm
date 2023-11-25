import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
  redirectTo: string;
  isAuth: boolean;
}

export const PrivateRoute: FC<IPrivateRoute> = ({
  children,
  redirectTo,
  isAuth,
}) => {
  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
