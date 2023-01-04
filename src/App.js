import { HashRouter, Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
