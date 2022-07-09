import './App.css';
import Home from "./component/Home/Home"
import StarWars from './component/Star_Wars/StarWars'
import Person from "./component/Person/Person"
import Library from "./component/Library/Library"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div>
    <BrowserRouter>
            <div className="wrap">
              <Routes>
              <Route  path="/" element={<Home />}/>
              <Route  path="/Star_Wars" element={<StarWars />}/>
              <Route path="/Person" element={<Person />} />
              <Route path="/Library" element={<Library />} />
              </Routes>
            </div>
        </BrowserRouter>
        
    </div>
  )
};

export default App;
