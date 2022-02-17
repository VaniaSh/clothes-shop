import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Authorization from "./pages/authorization/authorization.component";
import ShopPage from "./pages/shop/shop.componenet";




import './App.css';



import {Route} from "react-router-dom";
import {Switch} from "react-router";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signIn' component={Authorization}/>

            </Switch>
        </div>
    );
}

export default App;
