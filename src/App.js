import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import "./pages/homepage/homepage.styles.scss"
import Header from "./components/header/header.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return <div>
      <Header/>
     <Switch>
         <Route exact path={'/'} component={HomePage}/>
         <Route exact path={'/shop'} component={Shop}/>
         <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
     </Switch>
  </div>
}

export default App;
