import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route,Switch} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUp}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
    
    
  );
}

export default App;
