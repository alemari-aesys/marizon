import HeaderHome from './HeaderHome';
import Home from './Home';
import Landing from './Landing';
import { Route, Link, Switch } from "react-router-dom";


const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Landing />}></Route>
            <Route path="/Home" render={() => <Home />}></Route>
        </Switch>
        // <Home />
    );
}

export default App;