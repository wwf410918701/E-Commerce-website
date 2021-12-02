import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import CheckOut from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';



const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]) 

  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => (currentUser? <Redirect to='/' /> : <SignInAndSignUp />)}/>
        <Route exact path='/checkout' component={CheckOut}></Route>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  checkUserSession: user => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
