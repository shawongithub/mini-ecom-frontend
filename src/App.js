import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/">
          <Shop />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
