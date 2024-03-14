
import ScrollToTop from "./scrollToTop";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Navbar, Footer } from "./components/index.js";
import {Home, About, Attraction, ContactUs} from "../src/pages/index.js"

function App() {
  return (
  <>
 
 

 <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/attraction" exact element={<Attraction/>} />
          <Route path="/contactUs" exact element={<ContactUs/>} />
        </Routes>
        {/* <Home/>  */}
        <Footer />
      </Router>
  </>
  );
  
}

export default App;
