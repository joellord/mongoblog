import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";

import './App.css';

function App() {  
  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/post">Add new</a></li>
      </ul>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
