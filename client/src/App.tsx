import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'pages/Home';
import ItemDetails from 'pages/ItemDetails';
import Items from 'pages/Items';
import SearchBar from 'layouts/SearchBar';
import NoFound from 'pages/NoFound';

export default function BasicExample() {
  return (
    <Router>
      <>
        <SearchBar />
        <main id="root-app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/items/:id">
              <ItemDetails />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="*">
              <NoFound />
            </Route>
            <Route path="/error">
              <NoFound />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
}
