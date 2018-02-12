import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CategoryPage from "./category/Category";
import SubCategoryPage from "./subCategory/SubCategory";
import Product from "./product/Product";
import CartPage from "./cartPage/CartPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/category/:name/:id" component={CategoryPage} />
    <Route path="/subcategory/:name/:id" component={SubCategoryPage} />
    <Route path="/product/:name/:id" component={Product} />
    <Route path="/cart" component={CartPage} />
  </Switch>
);

export default Main;
