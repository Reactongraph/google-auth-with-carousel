import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import routes from "./routes-data";
import RoutesContainer from "./routes";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">loading...</div>
);

const basename = process.env.NODE_ENV === "development" ? "/" : "/";

const Routes = () => (
  <BrowserRouter basename={basename}>
    <Suspense fallback={loading()}>
      <Switch>
        {routes.map((route, i) => {
          return <RoutesContainer key={i} {...route} />;
        })}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
