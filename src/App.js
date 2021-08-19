import './App.scss';
import { Route, Switch, NavLink } from 'react-router-dom'
import UserForm from './pages/UserForm';
import UserList from './pages/UserList';

function App() {
  return (
    <>
    <header>
      <div className="warper">
        <div className="logo-ares">
          <h2>MyOnlineMentor</h2>
        </div>
        <nav>
          <ul>
            <li><NavLink activeClassName="active" to="/users" exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/user-form" exact>Add User</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <Switch>
      <Route path="/users" exact>
        <UserList />
      </Route>
      <Route path="/user-form" exact>
        <UserForm />
      </Route>
    </Switch>
    </>
  );
}

export default App;
