import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
