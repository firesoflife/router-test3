import './App.css';
import { Component } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import Music from './pages/Music';
import Projects from './pages/Projects';

// React Router
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={['/', '/Books', '/Music']}>
            <Nav />
            <Home />
            <Books />
            <Music />
          </Route>
          <Route path="/projects" component={Projects}>
            <Nav />
            <Projects />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
