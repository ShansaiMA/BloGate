import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MainView from './MainView';
import Footer from './Footer';
import './App.css';


function App() {
     return (          
    <Container>       
      <Header /> 
      <MainView />
      <Footer />
    </Container>
  );
}

export default App;
