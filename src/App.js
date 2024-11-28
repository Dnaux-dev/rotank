import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import AppRoutes from './routes';


function App() {
  return (
    <>
        <Header />
        <AppRoutes />
        <Footer />
    </>
  );
}

export default App;
