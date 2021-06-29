import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/index';
import { LoginPage } from './pages/LoginPage/index';
import { ProjectsPage } from './pages/ProjectsPage/index';
import { ContactPage } from './pages/ContactPage/index';

function App() {

  const history = useHistory();

  return (
    <Switch>
      <Route path = '/login' component = {LoginPage} />
      <Route path = '/projects' component = {ProjectsPage} />
      <Route path = '/contact' component = {ContactPage} />
      <Route path = '/' component = {HomePage}/>
    </Switch>
  );
}

export default App;