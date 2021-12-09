import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import React, { useEffect, lazy, Suspense} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckOut = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' render={() => (currentUser? <Redirect to='/' /> : <SignInAndSignUp />)}/>
            <Route exact path='/checkout' component={CheckOut}></Route>
            <Route exact path='/' component={HomePage}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
