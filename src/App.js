import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
      </Routes>
    </>
  );
}

export default App;
