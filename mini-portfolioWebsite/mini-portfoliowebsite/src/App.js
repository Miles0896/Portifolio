import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';

const App=()=>{
  return(
    <>
    <List/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  )
}
export default App;