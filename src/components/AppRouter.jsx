import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { PageNotFound } from "../pages/PageNotFound";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/loader/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}

      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
}
