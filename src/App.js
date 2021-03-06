import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

//Switch for the paths that you want to use 
function App() {
  return (
    //Put the header at the top it 
    //will always display no matter the path
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;
