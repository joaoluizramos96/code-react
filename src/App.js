import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contato'>
          <Contato />
        </Route>
        <Route path='/empresa'>
          <Empresa />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )

}

export default App;
