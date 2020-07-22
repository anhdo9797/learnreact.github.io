import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import login from "./component/Authentication/login";
import register from "./component/Authentication/register";
import ForgetAccount from "./component/Authentication/ForgetAccount";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/dang-ki" exact component={register} />
          <Route path="/quen-mat-khau" exact component={ForgetAccount} />
        </Switch>
      </div>
    </HashRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
