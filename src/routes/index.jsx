import Home from "../pages/Home";
import Result from "../pages/Result";
import Detail from "../pages/DetailProduct";
import Checkout from "../pages/Checkout";

const publicRoutes = [
  { path: "/", component: Home, layout: null },
  // { path: "/", component: Home },
  { path: "/result", component: Result },
  { path: "/detail", component: Detail },
];

const privateRoutes = [{ path: "/checkout", component: Checkout }];

export { publicRoutes, privateRoutes };
