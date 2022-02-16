import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";


import './App.css';



import {Route} from "react-router-dom";
import {Switch} from "react-router";
import ShopPage from "./pages/shop/shop.componenet";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
