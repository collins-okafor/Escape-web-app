import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screen/Home/home";
import Nav from "./UniversalComponents/NavBar/nav";
import { NavArr } from "./Utils/navArr";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav navArr={NavArr} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
