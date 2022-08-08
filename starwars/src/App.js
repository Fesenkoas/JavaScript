import './App.css';
import Header from './component/Header/Header'
import Nav from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home';
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import StarWars from './component/StarWars/StarWars';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div>
    <BrowserRouter>
        <Header />
        <Nav />
            <div className="wrap">
              <Routes>
              <Route  path="/" element={<Home />}/>
              <Route  path="/About" element={<About />}/>
              <Route path="/Star_Wars" element={<StarWars />} />
              <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
    </div>
  )
};

export default App;