import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOut from './pages/checkout/checkout.component';



class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth) // When it is null
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => (this.props.currentUser? <Redirect to='/' /> : <SignInAndSignUp />)}/>
          <Route exact path='/checkout' component={CheckOut}></Route>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
  );}
}

const mapStateToProps = (user) => ({
  currentUser: selectCurrentUser(user)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
