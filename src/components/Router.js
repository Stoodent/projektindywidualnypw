import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Test from "./Test";
import Info from "./Info";
import NotFound from "./NotFound";
import Result from "./Result";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/test" component={Test} />
      <Route path="/info" component={Info} />
      <Route path="/result" component={Result} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
