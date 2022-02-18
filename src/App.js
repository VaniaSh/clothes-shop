import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Authorization from "./pages/authorization/authorization.component";
import ShopPage from "./pages/shop/shop.componenet";


import './App.css';


import {Route} from "react-router-dom";
import {Switch} from "react-router";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data
                        }

                    })
                })
            }
            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact={true} path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signIn' component={Authorization}/>

                </Switch>
            </div>
        );
    }

}

export default App;
