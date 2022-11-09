import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
