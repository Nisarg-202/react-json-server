import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import CreatePost from './Pages/CreatePost';
import ShowPost from './Pages/ShowPost';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/posts" component={ShowPost} exact />
        <Route path="/posts/create" component={CreatePost} exact />
        <Redirect to="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
