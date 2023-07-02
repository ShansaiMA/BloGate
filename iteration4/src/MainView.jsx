import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HauptMain from './HauptMain'; // muss vielleiht drinne sein
import Startseite from './Startseite';
import Favoriten from './Favoriten';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import Artikel from './Artikel';

function MainView() {
  return (
    <div>
      <Header />
      <HauptMain />
      <Footer />
    </div>
    
  );
}

export default MainView;
