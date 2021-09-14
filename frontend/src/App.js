import './App.css';
import Safemoon from "./safemoon"
import Safemoonconnect from './safemoonconnect';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <div className="App">

        <Route exact path="/">
          <Safemoon />
        </Route>
        <Route exact path="/safemoonConnect">
          <Safemoonconnect />
        </Route>
      </div>
    </Router>
  );
}

export default App;
