import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import CardSection from './components/CardSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

class App extends Component{
  render(){ 
    return (
      <div className="App">
        <Header />
        <Showcase />
        <CardSection />
        <FeatureSection />
        <Footer />
      </div>
    )
  }
}
export default App;