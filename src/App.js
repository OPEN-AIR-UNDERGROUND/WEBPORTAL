import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import HeaderOpenAir from './modules/header/components/header.component';
import Footer from './modules/footer/components/footer.component'
import Menu from './modules/menu/components/menu.component';
import Artists from './modules/artist/components/artists.component';
import Sponsors from './modules/sponsors/components/sponsors.component';




const  App = () =>  {
  return (
    <div className="App">
     <Router>
          <HeaderOpenAir></HeaderOpenAir>
          <Menu></Menu>
       <Switch>
          <Route exact path="/artists" component={Artists}></Route>
          <Route exact path="/sponsors" component={Sponsors}></Route>
       </Switch>
       <Footer></Footer> 
     </Router>
    </div>
  );
}

export default App;
