import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import CheckOut from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { GlobalStyle } from './global.styles';



const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]) 

  return (
    <div>
      <GlobalStyle />
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

export default App;
