import React from "react";
const LoginContainer = React.lazy(() => import("../container/login"));
const LandingContainer = React.lazy(() => import("../container/landing"));
const PageNotfound = React.lazy(() => import("../container/pageNotFound"));

const routes = [
  {
    auth: false,
    path: "/",
    exact: true,
    component: LoginContainer
  },
  {
    auth: true,
    path: "/landing",
    exact: true,
    component: LandingContainer
  },
  {
    path: "*",
    component: PageNotfound
  }
];

export default routes;
