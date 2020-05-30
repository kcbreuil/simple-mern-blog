import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Article from "./components/articles/Article";
import Articles from "./components/articles/Articles";
import ArticleForm from "./components/articles/ArticleForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/articles/new" component={ArticleForm} />
          <Route path="/articles/:articleId/edit" component={ArticleForm} />
          <Route path="/articles/:articleId" component={Article} />
          <Route path="/" component={Articles} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
