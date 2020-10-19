import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAlbums from "./pages/ListAlbums/ListAlbums";
import ListSongs from "./pages/ListSongs/ListSongs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div className="main-wrapper">
        <header className="header-container">
            <h1 className="main-header-title"><Link to="/">Music app</Link></h1>
        </header>
        <Switch>
          <Route path="/" exact component={ListAlbums} />
          <Route path="/album/:id" exact component={ListSongs} />
        </Switch>
        <footer className="footer-container">©2020</footer>
      </div>
      </Router>
  );
}

export default App;
