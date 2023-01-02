import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="comento-shopping">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
