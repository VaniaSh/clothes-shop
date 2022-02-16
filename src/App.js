import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route} from "react-router-dom";
import {Switch} from "react-router";

const Shop = () => {
    return(
        <div>
            <h1>
                shop
            </h1>
        </div>
    )
}

function App() {
  return (
    <div>
        <Switch>
            <Route exact={true} path='/' component={HomePage}/>
            <Route path='/shop' component={Shop}/>
        </Switch>
    </div>
  );
}

export default App;
