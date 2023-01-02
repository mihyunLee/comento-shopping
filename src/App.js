import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="comento-shopping">
        <Routes>
          <Route path="/" />
          <Route path="/product/:productId" />
          <Route path="/basket" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
