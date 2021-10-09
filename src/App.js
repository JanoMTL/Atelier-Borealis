import React from 'react';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Engagement from './pages/Engagement';
import Réalisations from './pages/Réalisations';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Style/index.scss'; 



function App(){
  return (
    <>
    <Router>
    <Navbar/>
        
      <Route path='/' exact component={Accueil}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/Engagement' exact component={Engagement}/>
      <Route path='/realisations' exact component={Réalisations}/>
        
    </Router>
   
    </>

  );
}

export default App;