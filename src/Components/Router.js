import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
<<<<<<< HEAD
import Detail from "Routes/Detail";
=======
>>>>>>> 34b48003dde7e2d8ee194913e23ef38302096d0b
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
<<<<<<< HEAD
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
=======
>>>>>>> 34b48003dde7e2d8ee194913e23ef38302096d0b
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
