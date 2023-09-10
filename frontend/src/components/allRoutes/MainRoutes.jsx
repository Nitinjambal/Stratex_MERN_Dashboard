import React from "react";
import Error from "../../pages/Error";
import PrivateRoute from "./privateRoute";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Customers from "../sidebar/Customers";
import Products from "../sidebar/Products";

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
