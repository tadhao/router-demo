import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom'
import UserForm from './pages/UserForm/UserForm';
import UserList from './pages/UserList/UserList';
import NavHeader from './components/NavHeader/NavHeader';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import UserDetail from './pages/UserDetail/UserDetail';

function App() {
  return (
    <>
   <NavHeader />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/users" />
      </Route>
      <Route path="/users" exact>
        <UserList />
      </Route>
      <Route path="/users/:userId">
        <UserDetail />
      </Route>
      <Route path="/user-form" exact>
        <UserForm />
      </Route>
      <Route path="*">
        <ErrorHandler />
      </Route>
    </Switch>
    </>
  );
}

export default App;
