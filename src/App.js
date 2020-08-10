import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthenticationPage from './pages/auth/authentication.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            if(this.state.currentUser){
              console.log("Signed In!");
              // console.log(this.state.currentUser);
            } else {
              console.log("Not Signed In!");
            }
          })
        });

      } else {
        this.setState({currentUser: userAuth});
      }

    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/shop" component={ ShopPage } />
          {/* <Route path="/shop/hats/:productId" component={ HatDetails } /> */}
          <Route exact path="/login" component={ AuthenticationPage } />
        </Switch>
      </div>
    )
  }
}

export default App;
