import './App.scss';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Course from './pages/Course';
import Event from './pages/Event';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header>
      <div className="warper">
        <div className="logo-ares">
          <h2>MyOnlineMentor</h2>
        </div>
        <nav>
          <ul>
            <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/courses" exact>Courses</NavLink></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events" exact>
          <Event />
        </Route>
        <Route path="/courses" exact>
          <Course />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
