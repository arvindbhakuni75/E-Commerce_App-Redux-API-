
import './App.css';
import Header from './container/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element= {<ProductListing/>} />
        <Route  path='/product/:productId' element= {<ProductDetail/>} />
        <Route>404 Not Found!</Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
