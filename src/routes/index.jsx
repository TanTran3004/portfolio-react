import React from "react";

import Home from "../pages/Home";
import Result from "../pages/Result";
import Detail from "../pages/Detail";
import Checkout from "../pages/Checkout";
const publicRoutes = [
  { path: "/", component: Home, title: "Trang Chủ" },
  { path: "/result", component: Result, title: "Sản phẩm" },
  // { path: "/detail/:slug", component: Detail, title: "Chi tiết sản phẩm" },
  { path: "/detail/", component: Detail, title: "Chi tiết sản phẩm" },
  { path: "/checkout", component: Checkout, layout: null, title: "Thanh toán" },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
