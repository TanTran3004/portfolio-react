import Home from "../pages/Home";
import Result from "../pages/Result";

const publicRoutes = [
  { path: "/", component: Home, layout: null },
  { path: "/result", component: Result },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
