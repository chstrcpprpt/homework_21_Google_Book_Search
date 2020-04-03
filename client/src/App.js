import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Saved from "./pages/Saved";
import Home from "./pages/Home";

import './index.css';
import Nav from './components/Nav';
import { SearchContextProvider } from './contexts/SearchContext';
import { BookContextProvider } from './contexts/BookContext';
import { SavedContextProvider } from './contexts/SavedContext';

function App() {
  return (
      <Router>
        <div className="App">
          <SearchContextProvider>
            <BookContextProvider>
              <SavedContextProvider>
                <Nav />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/saved" component={Saved} />
                </Switch>
              </SavedContextProvider>
            </BookContextProvider>
          </SearchContextProvider>
        </div>
      </Router>
  );
}

export default App;
