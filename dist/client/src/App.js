"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
function BasicExample() {
    return (<react_router_dom_1.BrowserRouter>
      <div>
        <ul>
          <li>
            <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/dashboard">Dashboard</react_router_dom_1.Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route exact path="/">
            <Home />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/about">
            <About />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/dashboard">
            <Dashboard />
          </react_router_dom_1.Route>
        </react_router_dom_1.Switch>
      </div>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = BasicExample;
// You can think of these components as "pages"
// in your app.
function Home() {
    return (<div>
      <h2>Home</h2>
    </div>);
}
function About() {
    return (<div>
      <h2>About</h2>
    </div>);
}
function Dashboard() {
    return (<div>
      <h2>Dashboard</h2>
    </div>);
}
//# sourceMappingURL=App.js.map