import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./components/streams/list-stream.component";
import StreamCreate from "./components/streams/create-stream.component";
import StreamEdit from "./components/streams/edit-stream.component";
import StreamDelete from "./components/streams/delete-stream.component";
import StreamShow from "./components/streams/show-stream.component";
import Header from "./components/Header.component";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/create" component={StreamCreate} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route exact path="/streams/delete/:id" component={StreamDelete} />
            <Route exact path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
