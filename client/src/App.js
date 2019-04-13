import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import ShowRecipe from "./components/ShowRecipe";
import EditRecipe from "./components/EditRecipe";
import User from "./components/User";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import history from "./history";

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe/create" component={AddRecipe} />
          <Route path="/recipe/edit/:id" exact component={EditRecipe} />
          <Route path="/recipe/:id" exact component={ShowRecipe} />
          <Route path="/user/:id" component={User} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
