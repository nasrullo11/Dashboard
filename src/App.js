import { BrowserRouter as Router, Switch, Route}
 from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container">
        <Topbar />
        <Ecommerce />
          {/* <Switch>
            <Route exact path="/">
              <Ecommerce />
            </Route>
            <Route exact path="/ecommerce">
              <Ecommerce />
            </Route>
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
