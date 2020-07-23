import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import login from "./component/Authentication/login";
import register from "./component/Authentication/register";
import ForgetAccount from "./component/Authentication/ForgetAccount";
import Home from "./component/home";
import Profiler from "./component/home/Profile";
import MoreCourses from "./component/home/MoreCourses";

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={login} />
            <Route path="/dang-ki" exact component={register} />
            <Route path="/quen-mat-khau" exact component={ForgetAccount} />
            <Route path="/trang-chu" component={Home} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
