import { BrowserRouter as Router, Switch, Route}
 from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import './App.scss'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container1">
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
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
