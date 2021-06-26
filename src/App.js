import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import ReviewCart from './components/ReviewCart/ReviewCart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>

      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/review">
          <ReviewCart />
        </Route>
        <Route exact path='/'>
          <Shop />
        </Route>
      </Switch>

    </Router >

  );
}

export default App;
