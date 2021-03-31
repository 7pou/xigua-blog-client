import Layout from "@/layout";
import ArticleList from "@/pages/article/list";
import ArticleInfo from "@/pages/article/info";

import Home from "@/pages/Home";
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/article" >
          <Layout>
            <ArticleList />
          </Layout>
        </Route>
        <Route exact path="/article/:id" >
        <Layout>
            <ArticleInfo />
          </Layout>
        </Route>


      </Switch>
    </BrowserRouter>
  )
}


export default Routes