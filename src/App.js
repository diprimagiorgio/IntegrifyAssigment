import './App.css';
import UserCard from './components/UserCard';
import UserDetails from './components/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
    	<Route exact path='/'>
        <UserCard></UserCard>
    	</Route>
    	<Route path='/users/:id'>
    		<UserDetails />
    	</Route>
      </Switch>
    </Router>
  );
}

export default App;
