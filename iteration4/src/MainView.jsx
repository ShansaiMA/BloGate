import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './main'
import Startseite from './Startseite';
import Favoriten from './Favoriten';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import Artikel from './Artikel';
import HauptMain from './HauptMain'; // muss vielleiht drinne sein

function MainView() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}

export default MainView;
