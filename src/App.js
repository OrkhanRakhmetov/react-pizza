import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {


  return (

    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" Component={Home} exect/>
          <Route path="/cart" Component={Cart} exect/>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
