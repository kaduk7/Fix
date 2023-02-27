import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import SignUp from './components/pages/SignUp';
import ServicesTeam from './components/pages/ServiceTeam';
import ServicesGallery from './components/pages/ServiceGallery';
import Gallery from './components/pages/Gallery';
import Ourservice from './components/pages/OurService';

import FAQ from './components/pages/FAQ';
import Official from './components/pages/Official';
import Kontak from './components/Kontak';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Visi-misi' component={Services} />
          
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Our-Team' component={ServicesTeam} />
          <Route path='/Gallery' component={ServicesGallery} />
          <Route path='/Gallery2' component={Gallery} />
          <Route path='/Service' component={Ourservice} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/Kontak-kami' component={Kontak} />
          <Route path='/Official-partner' component={Official} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
