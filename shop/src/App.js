import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductContainer from './container/ProductContainer';
import CartContainer from './container/CartContainer';
import MessageContainer from './container/MessageContainer';


function App() {
  return (
    <div className="App">
        <Header/>
        <ProductContainer/>
        <MessageContainer/>
        <CartContainer/>
        <hr/>
        <Footer/>
    </div>
  );
}

export default App;
