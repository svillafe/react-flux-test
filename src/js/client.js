"use strict";

import React 		from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout	from "./pages/Layout";
import Products from "./pages/Products";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Products}></IndexRoute>
    </Route>
  </Router>
  ,app);