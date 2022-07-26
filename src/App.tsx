import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Page">
      <Header />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
