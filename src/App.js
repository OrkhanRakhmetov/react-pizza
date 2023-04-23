import React from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

// import { pizzasApi } from './utils/api';

function App() {
  const [pizzas, setPizzas] = React.useState([])


  React.useEffect(() => {
    axios.get('http://localhost:3000/react-pizza/api.json')
      .then(({ data }) => {
        setPizzas(data.pizzas)
      })

    // fetch('http://localhost:3000/react-pizza/api.json')
    //   .then((res) => {
    //     console.log('fetch', res);
    //     return res.json()
    //   })
    //   .then((json) => {
    //     setPizzas(json.pizzas)
    //   })

  }, []);


  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home itemss={pizzas}  />} exect />
          <Route path="/cart" Component={Cart} exect />
        </Routes>
      </div>
    </div>

  );
}

export default App;
