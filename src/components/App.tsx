import HeaderHome from "./HeaderHome";
import Home from "./Home";
import Landing from "./Landing";
import { Personal } from "./Personal";
import { Route, Link, Switch } from "react-router-dom";
import Settings from "./Settings";
import Help from "./Help";
import HeaderBasic from "./HeaderBasic";

const App = () => {
  return (
    <>
      <HeaderHome />
      <Switch>
        <Route exact path="/" render={() => <Landing />}></Route>
        <Route path="/Home" render={() => <Home />}></Route>
        <Route
          path="/Personal"
          render={() => (
            <Personal username="tiziostrano88" name="tizio" surname="strano" />
          )}
        ></Route>
        <Route path="/Settings" render={() => <Settings />}></Route>
        <Route path="/Help" render={() => <Help />}></Route>
      </Switch>
    </>
    // <Home />
  );
};

export default App;
