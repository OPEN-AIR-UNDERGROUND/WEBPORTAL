import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import HeaderOpenAir from './modules/header/components/header.component';
import Menu from './modules/menu/components/menu.component';

const  App = () =>  {
  return (
    <div className="App">
     <Router>
       <HeaderOpenAir></HeaderOpenAir>
       <Menu></Menu>
       <Switch>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
